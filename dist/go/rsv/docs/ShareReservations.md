# ShareReservations

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ShareReservations** | Pointer to [**HotelReservationsType**](HotelReservationsType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewShareReservations

`func NewShareReservations() *ShareReservations`

NewShareReservations instantiates a new ShareReservations object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewShareReservationsWithDefaults

`func NewShareReservationsWithDefaults() *ShareReservations`

NewShareReservationsWithDefaults instantiates a new ShareReservations object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetShareReservations

`func (o *ShareReservations) GetShareReservations() HotelReservationsType`

GetShareReservations returns the ShareReservations field if non-nil, zero value otherwise.

### GetShareReservationsOk

`func (o *ShareReservations) GetShareReservationsOk() (*HotelReservationsType, bool)`

GetShareReservationsOk returns a tuple with the ShareReservations field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetShareReservations

`func (o *ShareReservations) SetShareReservations(v HotelReservationsType)`

SetShareReservations sets ShareReservations field to given value.

### HasShareReservations

`func (o *ShareReservations) HasShareReservations() bool`

HasShareReservations returns a boolean if a field has been set.

### GetLinks

`func (o *ShareReservations) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ShareReservations) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ShareReservations) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ShareReservations) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *ShareReservations) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ShareReservations) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ShareReservations) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ShareReservations) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


