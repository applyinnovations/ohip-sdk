# ValidateRoomingListType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Reservations** | Pointer to [**[]ValidateRoomingListOutcomeType**](ValidateRoomingListOutcomeType.md) | Collection of outcome of validations of rooming list. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewValidateRoomingListType

`func NewValidateRoomingListType() *ValidateRoomingListType`

NewValidateRoomingListType instantiates a new ValidateRoomingListType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewValidateRoomingListTypeWithDefaults

`func NewValidateRoomingListTypeWithDefaults() *ValidateRoomingListType`

NewValidateRoomingListTypeWithDefaults instantiates a new ValidateRoomingListType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetReservations

`func (o *ValidateRoomingListType) GetReservations() []ValidateRoomingListOutcomeType`

GetReservations returns the Reservations field if non-nil, zero value otherwise.

### GetReservationsOk

`func (o *ValidateRoomingListType) GetReservationsOk() (*[]ValidateRoomingListOutcomeType, bool)`

GetReservationsOk returns a tuple with the Reservations field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservations

`func (o *ValidateRoomingListType) SetReservations(v []ValidateRoomingListOutcomeType)`

SetReservations sets Reservations field to given value.

### HasReservations

`func (o *ValidateRoomingListType) HasReservations() bool`

HasReservations returns a boolean if a field has been set.

### GetLinks

`func (o *ValidateRoomingListType) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ValidateRoomingListType) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ValidateRoomingListType) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ValidateRoomingListType) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *ValidateRoomingListType) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ValidateRoomingListType) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ValidateRoomingListType) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ValidateRoomingListType) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


