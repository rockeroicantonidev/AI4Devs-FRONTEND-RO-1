import React, { useEffect, useState } from 'react';
import { Button, Spinner, Alert, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const PositionBoard = ({ positionId }) => {
    const navigate = useNavigate();
    const [loadingFlow, setLoadingFlow] = useState(true);
    const [loadingCandidates, setLoadingCandidates] = useState(true);
    const [errorFlow, setErrorFlow] = useState('');
    const [errorCandidates, setErrorCandidates] = useState('');
    const [positionTitle, setPositionTitle] = useState('');
    const [phases, setPhases] = useState([]);
    const [candidates, setCandidates] = useState([]);
    const [draggedCandidate, setDraggedCandidate] = useState(null);
    const [moving, setMoving] = useState(false);
    const [moveError, setMoveError] = useState('');

    // Handler para iniciar el drag
    const handleDragStart = (candidate) => {
        setDraggedCandidate(candidate);
    };

    // Handler para permitir el drop
    const handleDragOver = (e) => {
        e.preventDefault();
    };

    // Handler para soltar el candidato en una fase
    const handleDrop = async (phaseId) => {
        if (!draggedCandidate || draggedCandidate.currentInterviewStep === phaseId) return;
        setMoving(true);
        setMoveError('');
        try {
            const res = await fetch(`http://localhost:3010/candidates/${draggedCandidate.id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    applicationId: draggedCandidate.applicationId,
                    currentInterviewStep: phaseId
                }),
            });
            if (!res.ok) throw new Error('Error al actualizar la fase del candidato');
            // Actualizar localmente el candidato
            setCandidates(prev =>
                prev.map(c =>
                    c.id === draggedCandidate.id
                        ? { ...c, currentInterviewStep: phases.find(p => p.id === phaseId).name }
                        : c
                )
            );
        } catch (err) {
            setMoveError(err.message || 'Error desconocido');
        } finally {
            setMoving(false);
            setDraggedCandidate(null);
        }
    };

    // Obtener flujo de entrevista
    useEffect(() => {
        const fetchInterviewFlow = async () => {
            setLoadingFlow(true);
            setErrorFlow('');
            try {
                const res = await fetch(`http://localhost:3010/position/${positionId}/interviewflow`);
                if (!res.ok) throw new Error('Error al obtener el flujo de entrevista');
                const data = await res.json();
                // Corrección: extraer según la estructura real
                const flow = data.interviewFlow;
                setPositionTitle(flow?.positionName || 'Sin título');
                setPhases(flow?.interviewFlow?.interviewSteps || []);
            } catch (err) {
                setErrorFlow(err.message || 'Error desconocido');
            } finally {
                setLoadingFlow(false);
            }
        };
        fetchInterviewFlow();
    }, [positionId]);

    // Obtener candidatos
    useEffect(() => {
        const fetchCandidates = async () => {
            setLoadingCandidates(true);
            setErrorCandidates('');
            try {
                const res = await fetch(`http://localhost:3010/position/${positionId}/candidates`);
                if (!res.ok) throw new Error('Error al obtener los candidatos');
                const data = await res.json();
                setCandidates(data || []);
            } catch (err) {
                setErrorCandidates(err.message || 'Error desconocido');
            } finally {
                setLoadingCandidates(false);
            }
        };
        fetchCandidates();
    }, [positionId]);

    // Agrupar candidatos por fase
    const candidatesByPhase = phases.reduce((acc, phase) => {
        acc[phase.name] = [];
        return acc;
    }, {});
    candidates.forEach(candidate => {
        if (candidatesByPhase[candidate.currentInterviewStep]) {
            candidatesByPhase[candidate.currentInterviewStep].push(candidate);
        }
    });

    return (
        <div className="position-board-container mt-4">
            <div className="d-flex align-items-center mb-4">
                <Button variant="link" onClick={() => navigate('/positions')} className="me-2">
                    <span aria-label="Volver" role="img">⬅️</span>
                </Button>
                <h2 className="mb-0">{positionTitle}</h2>
            </div>
            {(loadingFlow || loadingCandidates) && (
                <div className="text-center my-4">
                    <Spinner animation="border" role="status" />
                    <span className="ms-2">Cargando información...</span>
                </div>
            )}
            {(errorFlow || errorCandidates) && (
                <Alert variant="danger" className="my-4">
                    {errorFlow || errorCandidates}
                </Alert>
            )}
            {!loadingFlow && !loadingCandidates && !errorFlow && !errorCandidates && (
                <div className="phases-container d-flex flex-row flex-wrap">
                    {phases.map((phase, idx) => (
                        <div
                            key={phase.id || idx}
                            className="phase-column flex-fill p-2"
                            onDragOver={handleDragOver}
                            onDrop={() => handleDrop(phase.id)}
                            style={{ minHeight: '120px', background: '#f8f9fa', borderRadius: '8px' }}
                        >
                            <h5>{phase.name || `Fase ${idx + 1}`}</h5>
                            {candidatesByPhase[phase.name] && candidatesByPhase[phase.name].length === 0 && (
                                <div className="text-muted">Sin candidatos</div>
                            )}
                            {candidatesByPhase[phase.name] && candidatesByPhase[phase.name].map(candidate => (
                                <Card
                                    key={candidate.id}
                                    className="mb-2 candidate-card"
                                    draggable
                                    onDragStart={() => handleDragStart(candidate)}
                                    style={{ opacity: moving && draggedCandidate?.id === candidate.id ? 0.5 : 1, cursor: 'grab' }}
                                >
                                    <Card.Body>
                                        <Card.Title>{candidate.fullName}</Card.Title>
                                        <Card.Text>
                                            {Array.isArray(candidate.averageScore) ? candidate.averageScore.map(() => "🟢").join('') : "🟢".repeat(candidate.averageScore || 0)}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            ))}
                        </div>
                    ))}
                </div>
            )}
            {moving && (
                <div className="text-center my-2">
                    <Spinner animation="border" size="sm" /> Moviendo candidato...
                </div>
            )}
            {moveError && (
                <Alert variant="danger" className="my-2">
                    {moveError}
                </Alert>
            )}
        </div>
    );
};

export default PositionBoard;