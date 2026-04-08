# ChannelMarketingTextsInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**MarketingTexts** | Pointer to [**[]MarketingTextType**](MarketingTextType.md) |  | [optional] 
**HotelsInfo** | Pointer to [**[]HotelChannelInfoType**](HotelChannelInfoType.md) | Reference hotel info for the hotels in the result set. | [optional] 
**BookingChannelsInfo** | Pointer to [**[]BookingChannelInfoType**](BookingChannelInfoType.md) | Reference booking channel info for booking channels in the result set. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewChannelMarketingTextsInfo

`func NewChannelMarketingTextsInfo() *ChannelMarketingTextsInfo`

NewChannelMarketingTextsInfo instantiates a new ChannelMarketingTextsInfo object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChannelMarketingTextsInfoWithDefaults

`func NewChannelMarketingTextsInfoWithDefaults() *ChannelMarketingTextsInfo`

NewChannelMarketingTextsInfoWithDefaults instantiates a new ChannelMarketingTextsInfo object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMarketingTexts

`func (o *ChannelMarketingTextsInfo) GetMarketingTexts() []MarketingTextType`

GetMarketingTexts returns the MarketingTexts field if non-nil, zero value otherwise.

### GetMarketingTextsOk

`func (o *ChannelMarketingTextsInfo) GetMarketingTextsOk() (*[]MarketingTextType, bool)`

GetMarketingTextsOk returns a tuple with the MarketingTexts field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMarketingTexts

`func (o *ChannelMarketingTextsInfo) SetMarketingTexts(v []MarketingTextType)`

SetMarketingTexts sets MarketingTexts field to given value.

### HasMarketingTexts

`func (o *ChannelMarketingTextsInfo) HasMarketingTexts() bool`

HasMarketingTexts returns a boolean if a field has been set.

### GetHotelsInfo

`func (o *ChannelMarketingTextsInfo) GetHotelsInfo() []HotelChannelInfoType`

GetHotelsInfo returns the HotelsInfo field if non-nil, zero value otherwise.

### GetHotelsInfoOk

`func (o *ChannelMarketingTextsInfo) GetHotelsInfoOk() (*[]HotelChannelInfoType, bool)`

GetHotelsInfoOk returns a tuple with the HotelsInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelsInfo

`func (o *ChannelMarketingTextsInfo) SetHotelsInfo(v []HotelChannelInfoType)`

SetHotelsInfo sets HotelsInfo field to given value.

### HasHotelsInfo

`func (o *ChannelMarketingTextsInfo) HasHotelsInfo() bool`

HasHotelsInfo returns a boolean if a field has been set.

### GetBookingChannelsInfo

`func (o *ChannelMarketingTextsInfo) GetBookingChannelsInfo() []BookingChannelInfoType`

GetBookingChannelsInfo returns the BookingChannelsInfo field if non-nil, zero value otherwise.

### GetBookingChannelsInfoOk

`func (o *ChannelMarketingTextsInfo) GetBookingChannelsInfoOk() (*[]BookingChannelInfoType, bool)`

GetBookingChannelsInfoOk returns a tuple with the BookingChannelsInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBookingChannelsInfo

`func (o *ChannelMarketingTextsInfo) SetBookingChannelsInfo(v []BookingChannelInfoType)`

SetBookingChannelsInfo sets BookingChannelsInfo field to given value.

### HasBookingChannelsInfo

`func (o *ChannelMarketingTextsInfo) HasBookingChannelsInfo() bool`

HasBookingChannelsInfo returns a boolean if a field has been set.

### GetLinks

`func (o *ChannelMarketingTextsInfo) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ChannelMarketingTextsInfo) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ChannelMarketingTextsInfo) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ChannelMarketingTextsInfo) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *ChannelMarketingTextsInfo) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ChannelMarketingTextsInfo) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ChannelMarketingTextsInfo) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ChannelMarketingTextsInfo) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


