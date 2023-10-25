# PutBookingTypesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BookingTypes** | Pointer to [**[]BookingTypeType**](BookingTypeType.md) | List of Booking Types. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPutBookingTypesRequest

`func NewPutBookingTypesRequest() *PutBookingTypesRequest`

NewPutBookingTypesRequest instantiates a new PutBookingTypesRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPutBookingTypesRequestWithDefaults

`func NewPutBookingTypesRequestWithDefaults() *PutBookingTypesRequest`

NewPutBookingTypesRequestWithDefaults instantiates a new PutBookingTypesRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBookingTypes

`func (o *PutBookingTypesRequest) GetBookingTypes() []BookingTypeType`

GetBookingTypes returns the BookingTypes field if non-nil, zero value otherwise.

### GetBookingTypesOk

`func (o *PutBookingTypesRequest) GetBookingTypesOk() (*[]BookingTypeType, bool)`

GetBookingTypesOk returns a tuple with the BookingTypes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBookingTypes

`func (o *PutBookingTypesRequest) SetBookingTypes(v []BookingTypeType)`

SetBookingTypes sets BookingTypes field to given value.

### HasBookingTypes

`func (o *PutBookingTypesRequest) HasBookingTypes() bool`

HasBookingTypes returns a boolean if a field has been set.

### GetLinks

`func (o *PutBookingTypesRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PutBookingTypesRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PutBookingTypesRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PutBookingTypesRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *PutBookingTypesRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PutBookingTypesRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PutBookingTypesRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PutBookingTypesRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


