interface BreedingModalProps {
  breedingId: string;
  onClose: () => void;
  onImageClick: (imageUrl: string) => void;
}

const breedingData = {
  'A': {
    title: 'Vrh A',
    mother: 'Diana Bob Maine Treasures',
    father: 'Spyke Cavicoons',
    images: [
      'https://fa6ab152d7.cbaul-cdnwnd.com/fe87b4eb0eb1b548203f045e2935b53b/200000459-ae9ebae9ec/edbfe755-0c1f-404e-826e-65d92515e207.jpeg?ph=fa6ab152d7',
      'https://fa6ab152d7.cbaul-cdnwnd.com/fe87b4eb0eb1b548203f045e2935b53b/200000461-54b9654b98/b9d52af1-4823-4c8e-8e33-53e491e0698f.jpeg?ph=fa6ab152d7',
      '/VRH_A/messenger_creation_ff66135d-eba1-4f07-af36-dbccc86c4df8.jpeg',
      '/VRH_A/messenger_creation_e7c2b505-b9d6-40bc-b9bc-ba01d3ab45bc.jpeg',
      '/VRH_A/messenger_creation_e4a0d04e-e358-4783-a976-f7c85db6b58c.jpeg',
      '/VRH_A/messenger_creation_8c7506d6-5fc2-4833-a597-6361ee14505a.jpeg',
      '/VRH_A/messenger_creation_306e310c-92de-45c9-997d-0f0b29d95b84.jpeg',
    ]
  },
  'B': {
    title: 'Vrh B',
    mother: 'Diana Bob Maine Treasures',
    father: 'Spyke Cavicoons',
    images: [
      'https://fa6ab152d7.cbaul-cdnwnd.com/fe87b4eb0eb1b548203f045e2935b53b/200000463-bfa6abfa6c/01098a0f-fdc9-4943-811f-79111249bf6f.jpeg?ph=fa6ab152d7',
    ]
  },
  'C': {
    title: 'Vrh C',
    mother: 'Ajka Ichib Maine Treasures',
    father: 'Spyke Cavicoons',
    images: [
      'https://fa6ab152d7.cbaul-cdnwnd.com/fe87b4eb0eb1b548203f045e2935b53b/200000465-5f69c5f69e/4ef11054-c65c-4530-a858-472177c0ede5.jpeg?ph=fa6ab152d7',
    ]
  },
  'D': {
    title: 'Vrh D',
    mother: 'Makayla Quotr Maine Treasures',
    father: 'Spyke Cavicoons',
    images: [
      'https://fa6ab152d7.cbaul-cdnwnd.com/fe87b4eb0eb1b548203f045e2935b53b/200000467-45c7545c77/fb655dc1-6e83-434d-b264-7f6436850b55.jpeg?ph=fa6ab152d7',
    ]
  }
};

export default function BreedingModal({ breedingId, onClose, onImageClick }: BreedingModalProps) {
  const breeding = breedingData[breedingId as keyof typeof breedingData];

  if (!breeding) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <div className="modal-header">
          <h2 className="modal-title">{breeding.title}</h2>
          <div className="modal-parents">
            <div className="modal-parent-info">
              <span className="modal-parent-label">Matka:</span>
              <span className="modal-parent-name">{breeding.mother}</span>
            </div>
            <div className="modal-parent-info">
              <span className="modal-parent-label">Otec:</span>
              <span className="modal-parent-name">{breeding.father}</span>
            </div>
          </div>
        </div>

        <div className="modal-gallery">
          {breeding.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`${breeding.title} - Foto ${index + 1}`}
              className="modal-gallery-image"
              onClick={(e) => {
                e.stopPropagation();
                onImageClick(image);
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
