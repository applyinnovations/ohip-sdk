# ValidateReservationChangesDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ValidationMessages** | Pointer to [**[]ValidationReturnType**](ValidationReturnType.md) |  | [optional] 
**Reservation** | Pointer to [**HotelReservationType**](HotelReservationType.md) |  | [optional] 
**ReservationGuarantee** | Pointer to [**GuaranteePolicyType**](GuaranteePolicyType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewValidateReservationChangesDetails

`func NewValidateReservationChangesDetails() *ValidateReservationChangesDetails`

NewValidateReservationChangesDetails instantiates a new ValidateReservationChangesDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewValidateReservationChangesDetailsWithDefaults

`func NewValidateReservationChangesDetailsWithDefaults() *ValidateReservationChangesDetails`

NewValidateReservationChangesDetailsWithDefaults instantiates a new ValidateReservationChangesDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetValidationMessages

`func (o *ValidateReservationChangesDetails) GetValidationMessages() []ValidationReturnType`

GetValidationMessages returns the ValidationMessages field if non-nil, zero value otherwise.

### GetValidationMessagesOk

`func (o *ValidateReservationChangesDetails) GetValidationMessagesOk() (*[]ValidationReturnType, bool)`

GetValidationMessagesOk returns a tuple with the ValidationMessages field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValidationMessages

`func (o *ValidateReservationChangesDetails) SetValidationMessages(v []ValidationReturnType)`

SetValidationMessages sets ValidationMessages field to given value.

### HasValidationMessages

`func (o *ValidateReservationChangesDetails) HasValidationMessages() bool`

HasValidationMessages returns a boolean if a field has been set.

### GetReservation

`func (o *ValidateReservationChangesDetails) GetReservation() HotelReservationType`

GetReservation returns the Reservation field if non-nil, zero value otherwise.

### GetReservationOk

`func (o *ValidateReservationChangesDetails) GetReservationOk() (*HotelReservationType, bool)`

GetReservationOk returns a tuple with the Reservation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservation

`func (o *ValidateReservationChangesDetails) SetReservation(v HotelReservationType)`

SetReservation sets Reservation field to given value.

### HasReservation

`func (o *ValidateReservationChangesDetails) HasReservation() bool`

HasReservation returns a boolean if a field has been set.

### GetReservationGuarantee

`func (o *ValidateReservationChangesDetails) GetReservationGuarantee() GuaranteePolicyType`

GetReservationGuarantee returns the ReservationGuarantee field if non-nil, zero value otherwise.

### GetReservationGuaranteeOk

`func (o *ValidateReservationChangesDetails) GetReservationGuaranteeOk() (*GuaranteePolicyType, bool)`

GetReservationGuaranteeOk returns a tuple with the ReservationGuarantee field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationGuarantee

`func (o *ValidateReservationChangesDetails) SetReservationGuarantee(v GuaranteePolicyType)`

SetReservationGuarantee sets ReservationGuarantee field to given value.

### HasReservationGuarantee

`func (o *ValidateReservationChangesDetails) HasReservationGuarantee() bool`

HasReservationGuarantee returns a boolean if a field has been set.

### GetLinks

`func (o *ValidateReservationChangesDetails) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ValidateReservationChangesDetails) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ValidateReservationChangesDetails) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ValidateReservationChangesDetails) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *ValidateReservationChangesDetails) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ValidateReservationChangesDetails) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ValidateReservationChangesDetails) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ValidateReservationChangesDetails) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


