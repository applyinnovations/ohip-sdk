# ChannelHotelCodeMapping

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ChannelCode** | Pointer to **string** | Channel code for which the hotel code mapping information is needed. | [optional] 
**HotelInfo** | Pointer to [**HotelCodeMappingInfoType**](HotelCodeMappingInfoType.md) |  | [optional] 
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewChannelHotelCodeMapping

`func NewChannelHotelCodeMapping() *ChannelHotelCodeMapping`

NewChannelHotelCodeMapping instantiates a new ChannelHotelCodeMapping object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChannelHotelCodeMappingWithDefaults

`func NewChannelHotelCodeMappingWithDefaults() *ChannelHotelCodeMapping`

NewChannelHotelCodeMappingWithDefaults instantiates a new ChannelHotelCodeMapping object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetChannelCode

`func (o *ChannelHotelCodeMapping) GetChannelCode() string`

GetChannelCode returns the ChannelCode field if non-nil, zero value otherwise.

### GetChannelCodeOk

`func (o *ChannelHotelCodeMapping) GetChannelCodeOk() (*string, bool)`

GetChannelCodeOk returns a tuple with the ChannelCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChannelCode

`func (o *ChannelHotelCodeMapping) SetChannelCode(v string)`

SetChannelCode sets ChannelCode field to given value.

### HasChannelCode

`func (o *ChannelHotelCodeMapping) HasChannelCode() bool`

HasChannelCode returns a boolean if a field has been set.

### GetHotelInfo

`func (o *ChannelHotelCodeMapping) GetHotelInfo() HotelCodeMappingInfoType`

GetHotelInfo returns the HotelInfo field if non-nil, zero value otherwise.

### GetHotelInfoOk

`func (o *ChannelHotelCodeMapping) GetHotelInfoOk() (*HotelCodeMappingInfoType, bool)`

GetHotelInfoOk returns a tuple with the HotelInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelInfo

`func (o *ChannelHotelCodeMapping) SetHotelInfo(v HotelCodeMappingInfoType)`

SetHotelInfo sets HotelInfo field to given value.

### HasHotelInfo

`func (o *ChannelHotelCodeMapping) HasHotelInfo() bool`

HasHotelInfo returns a boolean if a field has been set.

### GetLinks

`func (o *ChannelHotelCodeMapping) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ChannelHotelCodeMapping) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ChannelHotelCodeMapping) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ChannelHotelCodeMapping) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *ChannelHotelCodeMapping) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ChannelHotelCodeMapping) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ChannelHotelCodeMapping) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ChannelHotelCodeMapping) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


