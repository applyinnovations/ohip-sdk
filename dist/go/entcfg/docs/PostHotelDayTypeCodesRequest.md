# PostHotelDayTypeCodesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelDayTypeCodes** | Pointer to [**[]HotelDayTypeCodeType**](HotelDayTypeCodeType.md) | Details for day type code at hotel level. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPostHotelDayTypeCodesRequest

`func NewPostHotelDayTypeCodesRequest() *PostHotelDayTypeCodesRequest`

NewPostHotelDayTypeCodesRequest instantiates a new PostHotelDayTypeCodesRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostHotelDayTypeCodesRequestWithDefaults

`func NewPostHotelDayTypeCodesRequestWithDefaults() *PostHotelDayTypeCodesRequest`

NewPostHotelDayTypeCodesRequestWithDefaults instantiates a new PostHotelDayTypeCodesRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelDayTypeCodes

`func (o *PostHotelDayTypeCodesRequest) GetHotelDayTypeCodes() []HotelDayTypeCodeType`

GetHotelDayTypeCodes returns the HotelDayTypeCodes field if non-nil, zero value otherwise.

### GetHotelDayTypeCodesOk

`func (o *PostHotelDayTypeCodesRequest) GetHotelDayTypeCodesOk() (*[]HotelDayTypeCodeType, bool)`

GetHotelDayTypeCodesOk returns a tuple with the HotelDayTypeCodes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelDayTypeCodes

`func (o *PostHotelDayTypeCodesRequest) SetHotelDayTypeCodes(v []HotelDayTypeCodeType)`

SetHotelDayTypeCodes sets HotelDayTypeCodes field to given value.

### HasHotelDayTypeCodes

`func (o *PostHotelDayTypeCodesRequest) HasHotelDayTypeCodes() bool`

HasHotelDayTypeCodes returns a boolean if a field has been set.

### GetLinks

`func (o *PostHotelDayTypeCodesRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PostHotelDayTypeCodesRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PostHotelDayTypeCodesRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PostHotelDayTypeCodesRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *PostHotelDayTypeCodesRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostHotelDayTypeCodesRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostHotelDayTypeCodesRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostHotelDayTypeCodesRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


