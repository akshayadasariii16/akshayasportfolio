import { Project } from '../types/portfolio';

export const projectsData: Project[] = [
  {
    id: 'plant-detector-ai',
    title: 'Plant Detector // Botanical AI',
    tagline: 'Computer Vision & Large-Scale Plant Recognition System',
    summary: 'An intelligent AI application powered by computer vision and a vast botanical database that accurately recognizes and classifies plant species in real-time when shown to the camera.',
    status: 'Completed',
    category: 'AI & Machine Learning',
    telemetryId: 'BOTANICAL_AI_04',
    techStack: ['Python', 'Computer Vision', 'PyTorch / TensorFlow', 'FastAPI', 'React', 'TypeScript'],
    problem: 'Identifying diverse flora species, assessing plant health, and categorizing botanical taxonomy manually requires deep domain expertise, making flora exploration challenging for students, agriculturists, and plant enthusiasts.',
    solution: 'Constructed an end-to-end computer vision recognition pipeline trained on an extensive botanical database of thousands of plant classes. The system instantly classifies leaf patterns, flowers, and foliage captured via camera feed, returning detailed species taxonomy, care guides, and growth metrics.',
    highlights: [
      'High-precision real-time plant species detection and botanical classification',
      'Extensive multi-species database featuring botanical taxonomy, watering requirements, and ideal climates',
      'Live camera scanner feed with instant visual bounding-box identification and confidence scoring',
      'Robust offline-first classification cache designed for field exploration and remote botanical research'
    ],
    githubUrl: 'https://github.com/akshaya/plant-detector-ai',
    liveUrl: '#hero'
  },
  {
    id: 'jarvis-core',
    title: 'JARVIS // Personal AI Assistant',
    tagline: 'Autonomous Multimodal Intelligence & Executive Terminal',
    summary: 'A desktop AI orchestrator featuring bidirectional voice interaction, contextual command routing, and automated workstation operations.',
    status: 'In Development',
    category: 'AI & Machine Learning',
    telemetryId: 'MOD_AI_092',
    techStack: ['Python', 'Web Speech API', 'LangChain', 'FastAPI', 'React', 'TypeScript'],
    problem: 'Standard voice assistants are locked in closed ecosystems, lack multi-step reasoning capabilities, and require repetitive manual intervention for deep local workflow execution.',
    solution: 'Engineered an extensible, local-first intelligence broker that integrates speech-to-intent parsing with deterministic command plugins, providing low-latency desktop control and proactive telemetry.',
    highlights: [
      'Bidirectional low-latency speech synthesis and recognition pipeline',
      'Dynamic contextual memory preserving conversation state across sessions',
      'Local plugin architecture for system automation and workspace control',
      'Telemetry HUD with visual 4-bar reactive audio equalizer'
    ],
    githubUrl: 'https://github.com/akshaya-core/jarvis-assistant',
    liveUrl: '#hero'
  },
  {
    id: 'novamart-platform',
    title: 'NovaMart // Next-Gen E-Commerce',
    tagline: 'High-Throughput Headless Storefront & Inventory Mesh',
    summary: 'A distributed commerce infrastructure with real-time stock synchronization, sub-100ms catalog search, and resilient checkout pipelines.',
    status: 'Completed',
    category: 'Full-Stack Web',
    telemetryId: 'SYS_ECOMM_144',
    techStack: ['React', 'Next.js', 'Node.js', 'PostgreSQL', 'Redis', 'Tailwind CSS'],
    problem: 'Legacy monolithic e-commerce platforms struggle with flash sale traffic spikes, leading to overselling race conditions and brittle cart checkout experiences.',
    solution: 'Designed an event-driven architecture using Redis pub/sub locks for atomic inventory reservations, paired with an edge-cached headless storefront delivering lightning-fast page transitions.',
    highlights: [
      'Atomic inventory reservation mechanism preventing double-spend anomalies',
      'Sub-80ms full-text catalog query response times backed by search indexes',
      'Modular payment gateway integration supporting Webhook resilience',
      'Fluid glassmorphism checkout interface optimized for mobile conversion'
    ],
    githubUrl: 'https://github.com/akshaya-core/novamart-platform',
    liveUrl: 'https://novamart-demo.example.com'
  },
  {
    id: 'wifi-attendance-mesh',
    title: 'Wi-Fi Attendance System',
    tagline: 'Beacon Telemetry & Frictionless Proximity Verification',
    summary: 'An institutional presence verification protocol that eliminates queues through cryptographically verified local Wi-Fi beacon handshakes.',
    status: 'Completed',
    category: 'Networks & Systems',
    telemetryId: 'IOT_NET_802',
    techStack: ['TypeScript', 'Node.js', 'MongoDB', 'React Native', 'Docker', 'JWT'],
    problem: 'Biometric scanners and physical roll-call queues cause massive throughput bottlenecks in large universities and enterprise workspaces during peak arrivals.',
    solution: 'Implemented an automatic presence logging framework combining BSSID/SSID cryptographic challenge-response authentication with rotating one-time geofenced tokens.',
    highlights: [
      'Zero-touch check-in completed in under 1.2 seconds upon network association',
      'Anti-spoofing mechanism utilizing dynamic rotating cryptographic nonces',
      'Administrative analytics dashboard with live occupancy heatmaps',
      'Exportable compliance audit trails with end-to-end data integrity'
    ],
    githubUrl: 'https://github.com/akshaya-core/wifi-attendance',
    liveUrl: 'https://wifi-attendance.example.com'
  }
];
