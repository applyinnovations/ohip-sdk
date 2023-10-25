# PutReservationColorsRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**ReservationColors** | Pointer to [**[]ReservationColorType**](ReservationColorType.md) | Collection of reservation colors. | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPutReservationColorsRequest

`func NewPutReservationColorsRequest() *PutReservationColorsRequest`

NewPutReservationColorsRequest instantiates a new PutReservationColorsRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPutReservationColorsRequestWithDefaults

`func NewPutReservationColorsRequestWithDefaults() *PutReservationColorsRequest`

NewPutReservationColorsRequestWithDefaults instantiates a new PutReservationColorsRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *PutReservationColorsRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PutReservationColorsRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PutReservationColorsRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PutReservationColorsRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetReservationColors

`func (o *PutReservationColorsRequest) GetReservationColors() []ReservationColorType`

GetReservationColors returns the ReservationColors field if non-nil, zero value otherwise.

### GetReservationColorsOk

`func (o *PutReservationColorsRequest) GetReservationColorsOk() (*[]ReservationColorType, bool)`

GetReservationColorsOk returns a tuple with the ReservationColors field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationColors

`func (o *PutReservationColorsRequest) SetReservationColors(v []ReservationColorType)`

SetReservationColors sets ReservationColors field to given value.

### HasReservationColors

`func (o *PutReservationColorsRequest) HasReservationColors() bool`

HasReservationColors returns a boolean if a field has been set.

### GetWarnings

`func (o *PutReservationColorsRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PutReservationColorsRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PutReservationColorsRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PutReservationColorsRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


