# LinkedHotelReservations

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Reservations** | Pointer to [**LinkedHotelReservationsType**](LinkedHotelReservationsType.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewLinkedHotelReservations

`func NewLinkedHotelReservations() *LinkedHotelReservations`

NewLinkedHotelReservations instantiates a new LinkedHotelReservations object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewLinkedHotelReservationsWithDefaults

`func NewLinkedHotelReservationsWithDefaults() *LinkedHotelReservations`

NewLinkedHotelReservationsWithDefaults instantiates a new LinkedHotelReservations object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *LinkedHotelReservations) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *LinkedHotelReservations) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *LinkedHotelReservations) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *LinkedHotelReservations) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetReservations

`func (o *LinkedHotelReservations) GetReservations() LinkedHotelReservationsType`

GetReservations returns the Reservations field if non-nil, zero value otherwise.

### GetReservationsOk

`func (o *LinkedHotelReservations) GetReservationsOk() (*LinkedHotelReservationsType, bool)`

GetReservationsOk returns a tuple with the Reservations field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservations

`func (o *LinkedHotelReservations) SetReservations(v LinkedHotelReservationsType)`

SetReservations sets Reservations field to given value.

### HasReservations

`func (o *LinkedHotelReservations) HasReservations() bool`

HasReservations returns a boolean if a field has been set.

### GetWarnings

`func (o *LinkedHotelReservations) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *LinkedHotelReservations) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *LinkedHotelReservations) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *LinkedHotelReservations) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


