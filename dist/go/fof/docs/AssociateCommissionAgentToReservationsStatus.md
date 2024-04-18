# AssociateCommissionAgentToReservationsStatus

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CommissionReservationFailures** | Pointer to [**[]CommissionReservationFailureType**](CommissionReservationFailureType.md) | Reservation that wasn&#39;t successfully associated with the agent. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewAssociateCommissionAgentToReservationsStatus

`func NewAssociateCommissionAgentToReservationsStatus() *AssociateCommissionAgentToReservationsStatus`

NewAssociateCommissionAgentToReservationsStatus instantiates a new AssociateCommissionAgentToReservationsStatus object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAssociateCommissionAgentToReservationsStatusWithDefaults

`func NewAssociateCommissionAgentToReservationsStatusWithDefaults() *AssociateCommissionAgentToReservationsStatus`

NewAssociateCommissionAgentToReservationsStatusWithDefaults instantiates a new AssociateCommissionAgentToReservationsStatus object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCommissionReservationFailures

`func (o *AssociateCommissionAgentToReservationsStatus) GetCommissionReservationFailures() []CommissionReservationFailureType`

GetCommissionReservationFailures returns the CommissionReservationFailures field if non-nil, zero value otherwise.

### GetCommissionReservationFailuresOk

`func (o *AssociateCommissionAgentToReservationsStatus) GetCommissionReservationFailuresOk() (*[]CommissionReservationFailureType, bool)`

GetCommissionReservationFailuresOk returns a tuple with the CommissionReservationFailures field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCommissionReservationFailures

`func (o *AssociateCommissionAgentToReservationsStatus) SetCommissionReservationFailures(v []CommissionReservationFailureType)`

SetCommissionReservationFailures sets CommissionReservationFailures field to given value.

### HasCommissionReservationFailures

`func (o *AssociateCommissionAgentToReservationsStatus) HasCommissionReservationFailures() bool`

HasCommissionReservationFailures returns a boolean if a field has been set.

### GetLinks

`func (o *AssociateCommissionAgentToReservationsStatus) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *AssociateCommissionAgentToReservationsStatus) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *AssociateCommissionAgentToReservationsStatus) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *AssociateCommissionAgentToReservationsStatus) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *AssociateCommissionAgentToReservationsStatus) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *AssociateCommissionAgentToReservationsStatus) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *AssociateCommissionAgentToReservationsStatus) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *AssociateCommissionAgentToReservationsStatus) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

