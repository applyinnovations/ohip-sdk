# CreateRoomingListType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Reservations** | Pointer to [**[]CreateRoomingListOutcomeType**](CreateRoomingListOutcomeType.md) | Collection of outcome of creation of rooming list reservations. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewCreateRoomingListType

`func NewCreateRoomingListType() *CreateRoomingListType`

NewCreateRoomingListType instantiates a new CreateRoomingListType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCreateRoomingListTypeWithDefaults

`func NewCreateRoomingListTypeWithDefaults() *CreateRoomingListType`

NewCreateRoomingListTypeWithDefaults instantiates a new CreateRoomingListType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetReservations

`func (o *CreateRoomingListType) GetReservations() []CreateRoomingListOutcomeType`

GetReservations returns the Reservations field if non-nil, zero value otherwise.

### GetReservationsOk

`func (o *CreateRoomingListType) GetReservationsOk() (*[]CreateRoomingListOutcomeType, bool)`

GetReservationsOk returns a tuple with the Reservations field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservations

`func (o *CreateRoomingListType) SetReservations(v []CreateRoomingListOutcomeType)`

SetReservations sets Reservations field to given value.

### HasReservations

`func (o *CreateRoomingListType) HasReservations() bool`

HasReservations returns a boolean if a field has been set.

### GetLinks

`func (o *CreateRoomingListType) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *CreateRoomingListType) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *CreateRoomingListType) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *CreateRoomingListType) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *CreateRoomingListType) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *CreateRoomingListType) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *CreateRoomingListType) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *CreateRoomingListType) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


