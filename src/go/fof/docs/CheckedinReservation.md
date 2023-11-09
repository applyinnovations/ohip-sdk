# CheckedinReservation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**Reservation** | Pointer to [**[]HotelReservationType**](HotelReservationType.md) | Reservation record showing the current state of the reservation. | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewCheckedinReservation

`func NewCheckedinReservation() *CheckedinReservation`

NewCheckedinReservation instantiates a new CheckedinReservation object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCheckedinReservationWithDefaults

`func NewCheckedinReservationWithDefaults() *CheckedinReservation`

NewCheckedinReservationWithDefaults instantiates a new CheckedinReservation object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *CheckedinReservation) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *CheckedinReservation) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *CheckedinReservation) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *CheckedinReservation) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetReservation

`func (o *CheckedinReservation) GetReservation() []HotelReservationType`

GetReservation returns the Reservation field if non-nil, zero value otherwise.

### GetReservationOk

`func (o *CheckedinReservation) GetReservationOk() (*[]HotelReservationType, bool)`

GetReservationOk returns a tuple with the Reservation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservation

`func (o *CheckedinReservation) SetReservation(v []HotelReservationType)`

SetReservation sets Reservation field to given value.

### HasReservation

`func (o *CheckedinReservation) HasReservation() bool`

HasReservation returns a boolean if a field has been set.

### GetWarnings

`func (o *CheckedinReservation) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *CheckedinReservation) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *CheckedinReservation) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *CheckedinReservation) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


