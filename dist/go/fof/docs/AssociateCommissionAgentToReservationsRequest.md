# AssociateCommissionAgentToReservationsRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CommissionAgent** | Pointer to [**CommissionAgentIDType**](CommissionAgentIDType.md) |  | [optional] 
**Instructions** | Pointer to [**CommissionReservationInstructionsType**](CommissionReservationInstructionsType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Reservations** | Pointer to [**HotelReservationsIDType**](HotelReservationsIDType.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewAssociateCommissionAgentToReservationsRequest

`func NewAssociateCommissionAgentToReservationsRequest() *AssociateCommissionAgentToReservationsRequest`

NewAssociateCommissionAgentToReservationsRequest instantiates a new AssociateCommissionAgentToReservationsRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAssociateCommissionAgentToReservationsRequestWithDefaults

`func NewAssociateCommissionAgentToReservationsRequestWithDefaults() *AssociateCommissionAgentToReservationsRequest`

NewAssociateCommissionAgentToReservationsRequestWithDefaults instantiates a new AssociateCommissionAgentToReservationsRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCommissionAgent

`func (o *AssociateCommissionAgentToReservationsRequest) GetCommissionAgent() CommissionAgentIDType`

GetCommissionAgent returns the CommissionAgent field if non-nil, zero value otherwise.

### GetCommissionAgentOk

`func (o *AssociateCommissionAgentToReservationsRequest) GetCommissionAgentOk() (*CommissionAgentIDType, bool)`

GetCommissionAgentOk returns a tuple with the CommissionAgent field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCommissionAgent

`func (o *AssociateCommissionAgentToReservationsRequest) SetCommissionAgent(v CommissionAgentIDType)`

SetCommissionAgent sets CommissionAgent field to given value.

### HasCommissionAgent

`func (o *AssociateCommissionAgentToReservationsRequest) HasCommissionAgent() bool`

HasCommissionAgent returns a boolean if a field has been set.

### GetInstructions

`func (o *AssociateCommissionAgentToReservationsRequest) GetInstructions() CommissionReservationInstructionsType`

GetInstructions returns the Instructions field if non-nil, zero value otherwise.

### GetInstructionsOk

`func (o *AssociateCommissionAgentToReservationsRequest) GetInstructionsOk() (*CommissionReservationInstructionsType, bool)`

GetInstructionsOk returns a tuple with the Instructions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInstructions

`func (o *AssociateCommissionAgentToReservationsRequest) SetInstructions(v CommissionReservationInstructionsType)`

SetInstructions sets Instructions field to given value.

### HasInstructions

`func (o *AssociateCommissionAgentToReservationsRequest) HasInstructions() bool`

HasInstructions returns a boolean if a field has been set.

### GetLinks

`func (o *AssociateCommissionAgentToReservationsRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *AssociateCommissionAgentToReservationsRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *AssociateCommissionAgentToReservationsRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *AssociateCommissionAgentToReservationsRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetReservations

`func (o *AssociateCommissionAgentToReservationsRequest) GetReservations() HotelReservationsIDType`

GetReservations returns the Reservations field if non-nil, zero value otherwise.

### GetReservationsOk

`func (o *AssociateCommissionAgentToReservationsRequest) GetReservationsOk() (*HotelReservationsIDType, bool)`

GetReservationsOk returns a tuple with the Reservations field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservations

`func (o *AssociateCommissionAgentToReservationsRequest) SetReservations(v HotelReservationsIDType)`

SetReservations sets Reservations field to given value.

### HasReservations

`func (o *AssociateCommissionAgentToReservationsRequest) HasReservations() bool`

HasReservations returns a boolean if a field has been set.

### GetWarnings

`func (o *AssociateCommissionAgentToReservationsRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *AssociateCommissionAgentToReservationsRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *AssociateCommissionAgentToReservationsRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *AssociateCommissionAgentToReservationsRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


