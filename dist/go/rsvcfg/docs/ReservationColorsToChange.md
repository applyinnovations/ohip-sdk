# ReservationColorsToChange

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ReservationColors** | Pointer to [**[]ReservationColorType**](ReservationColorType.md) | Collection of reservation colors. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewReservationColorsToChange

`func NewReservationColorsToChange() *ReservationColorsToChange`

NewReservationColorsToChange instantiates a new ReservationColorsToChange object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewReservationColorsToChangeWithDefaults

`func NewReservationColorsToChangeWithDefaults() *ReservationColorsToChange`

NewReservationColorsToChangeWithDefaults instantiates a new ReservationColorsToChange object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetReservationColors

`func (o *ReservationColorsToChange) GetReservationColors() []ReservationColorType`

GetReservationColors returns the ReservationColors field if non-nil, zero value otherwise.

### GetReservationColorsOk

`func (o *ReservationColorsToChange) GetReservationColorsOk() (*[]ReservationColorType, bool)`

GetReservationColorsOk returns a tuple with the ReservationColors field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationColors

`func (o *ReservationColorsToChange) SetReservationColors(v []ReservationColorType)`

SetReservationColors sets ReservationColors field to given value.

### HasReservationColors

`func (o *ReservationColorsToChange) HasReservationColors() bool`

HasReservationColors returns a boolean if a field has been set.

### GetLinks

`func (o *ReservationColorsToChange) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ReservationColorsToChange) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ReservationColorsToChange) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ReservationColorsToChange) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *ReservationColorsToChange) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ReservationColorsToChange) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ReservationColorsToChange) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ReservationColorsToChange) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


