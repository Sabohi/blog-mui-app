export interface ButtonComponentProps {
    onClick: () => void;
    text: string;
    color?: 'primary' | 'secondary',
    variant?: 'text' | 'outlined' | 'contained';
    size?: 'small' | 'medium' | 'large';
    startIcon?: React.ReactElement;
    endIcon?: React.ReactElement;
};

export interface Destination {
    id: number;
    title: string;
    body: string;
    image?: string;
};

export interface CardComponentProps {
    data: Destination    
};

export interface ConfirmationDialogProps {
    open: boolean;
    onClose: () => void;
    onConfirm: () => void;
    title?: string;
    message?: string;
};

export interface IconButtonWithTooltipProps {
    icon: React.ElementType; 
    title: string;
    onClick?: () => void;
    redirectTo?: string;
    size?: string;
};

export interface PaginationComponentProps {
    page: number;
    count: number;
    onPageChange: () => void;
};

export interface Destination {
    id: number;
    title: string;
    body: string;
    image?: string;
};