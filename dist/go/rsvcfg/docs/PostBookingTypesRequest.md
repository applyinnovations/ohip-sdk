# PostBookingTypesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BookingTypes** | Pointer to [**[]BookingTypeType**](BookingTypeType.md) | List of Booking Types. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPostBookingTypesRequest

`func NewPostBookingTypesRequest() *PostBookingTypesRequest`

NewPostBookingTypesRequest instantiates a new PostBookingTypesRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostBookingTypesRequestWithDefaults

`func NewPostBookingTypesRequestWithDefaults() *PostBookingTypesRequest`

NewPostBookingTypesRequestWithDefaults instantiates a new PostBookingTypesRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBookingTypes

`func (o *PostBookingTypesRequest) GetBookingTypes() []BookingTypeType`

GetBookingTypes returns the BookingTypes field if non-nil, zero value otherwise.

### GetBookingTypesOk

`func (o *PostBookingTypesRequest) GetBookingTypesOk() (*[]BookingTypeType, bool)`

GetBookingTypesOk returns a tuple with the BookingTypes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBookingTypes

`func (o *PostBookingTypesRequest) SetBookingTypes(v []BookingTypeType)`

SetBookingTypes sets BookingTypes field to given value.

### HasBookingTypes

`func (o *PostBookingTypesRequest) HasBookingTypes() bool`

HasBookingTypes returns a boolean if a field has been set.

### GetLinks

`func (o *PostBookingTypesRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PostBookingTypesRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PostBookingTypesRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PostBookingTypesRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *PostBookingTypesRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostBookingTypesRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostBookingTypesRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostBookingTypesRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


