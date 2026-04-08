# AssociateCommissionAgentToReservations

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CommissionAgent** | Pointer to [**CommissionAgentIDType**](CommissionAgentIDType.md) |  | [optional] 
**Reservations** | Pointer to [**HotelReservationsIDType**](HotelReservationsIDType.md) |  | [optional] 
**Instructions** | Pointer to [**CommissionReservationInstructionsType**](CommissionReservationInstructionsType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewAssociateCommissionAgentToReservations

`func NewAssociateCommissionAgentToReservations() *AssociateCommissionAgentToReservations`

NewAssociateCommissionAgentToReservations instantiates a new AssociateCommissionAgentToReservations object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAssociateCommissionAgentToReservationsWithDefaults

`func NewAssociateCommissionAgentToReservationsWithDefaults() *AssociateCommissionAgentToReservations`

NewAssociateCommissionAgentToReservationsWithDefaults instantiates a new AssociateCommissionAgentToReservations object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCommissionAgent

`func (o *AssociateCommissionAgentToReservations) GetCommissionAgent() CommissionAgentIDType`

GetCommissionAgent returns the CommissionAgent field if non-nil, zero value otherwise.

### GetCommissionAgentOk

`func (o *AssociateCommissionAgentToReservations) GetCommissionAgentOk() (*CommissionAgentIDType, bool)`

GetCommissionAgentOk returns a tuple with the CommissionAgent field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCommissionAgent

`func (o *AssociateCommissionAgentToReservations) SetCommissionAgent(v CommissionAgentIDType)`

SetCommissionAgent sets CommissionAgent field to given value.

### HasCommissionAgent

`func (o *AssociateCommissionAgentToReservations) HasCommissionAgent() bool`

HasCommissionAgent returns a boolean if a field has been set.

### GetReservations

`func (o *AssociateCommissionAgentToReservations) GetReservations() HotelReservationsIDType`

GetReservations returns the Reservations field if non-nil, zero value otherwise.

### GetReservationsOk

`func (o *AssociateCommissionAgentToReservations) GetReservationsOk() (*HotelReservationsIDType, bool)`

GetReservationsOk returns a tuple with the Reservations field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservations

`func (o *AssociateCommissionAgentToReservations) SetReservations(v HotelReservationsIDType)`

SetReservations sets Reservations field to given value.

### HasReservations

`func (o *AssociateCommissionAgentToReservations) HasReservations() bool`

HasReservations returns a boolean if a field has been set.

### GetInstructions

`func (o *AssociateCommissionAgentToReservations) GetInstructions() CommissionReservationInstructionsType`

GetInstructions returns the Instructions field if non-nil, zero value otherwise.

### GetInstructionsOk

`func (o *AssociateCommissionAgentToReservations) GetInstructionsOk() (*CommissionReservationInstructionsType, bool)`

GetInstructionsOk returns a tuple with the Instructions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInstructions

`func (o *AssociateCommissionAgentToReservations) SetInstructions(v CommissionReservationInstructionsType)`

SetInstructions sets Instructions field to given value.

### HasInstructions

`func (o *AssociateCommissionAgentToReservations) HasInstructions() bool`

HasInstructions returns a boolean if a field has been set.

### GetLinks

`func (o *AssociateCommissionAgentToReservations) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *AssociateCommissionAgentToReservations) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *AssociateCommissionAgentToReservations) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *AssociateCommissionAgentToReservations) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *AssociateCommissionAgentToReservations) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *AssociateCommissionAgentToReservations) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *AssociateCommissionAgentToReservations) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *AssociateCommissionAgentToReservations) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


