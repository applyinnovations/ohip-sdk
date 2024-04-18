# ChannelMarketingTextCopy

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CopyChannelMarketingTexts** | Pointer to [**[]CopyMarketingTextType**](CopyMarketingTextType.md) | List of channel marketing texts to be copied. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewChannelMarketingTextCopy

`func NewChannelMarketingTextCopy() *ChannelMarketingTextCopy`

NewChannelMarketingTextCopy instantiates a new ChannelMarketingTextCopy object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChannelMarketingTextCopyWithDefaults

`func NewChannelMarketingTextCopyWithDefaults() *ChannelMarketingTextCopy`

NewChannelMarketingTextCopyWithDefaults instantiates a new ChannelMarketingTextCopy object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCopyChannelMarketingTexts

`func (o *ChannelMarketingTextCopy) GetCopyChannelMarketingTexts() []CopyMarketingTextType`

GetCopyChannelMarketingTexts returns the CopyChannelMarketingTexts field if non-nil, zero value otherwise.

### GetCopyChannelMarketingTextsOk

`func (o *ChannelMarketingTextCopy) GetCopyChannelMarketingTextsOk() (*[]CopyMarketingTextType, bool)`

GetCopyChannelMarketingTextsOk returns a tuple with the CopyChannelMarketingTexts field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCopyChannelMarketingTexts

`func (o *ChannelMarketingTextCopy) SetCopyChannelMarketingTexts(v []CopyMarketingTextType)`

SetCopyChannelMarketingTexts sets CopyChannelMarketingTexts field to given value.

### HasCopyChannelMarketingTexts

`func (o *ChannelMarketingTextCopy) HasCopyChannelMarketingTexts() bool`

HasCopyChannelMarketingTexts returns a boolean if a field has been set.

### GetLinks

`func (o *ChannelMarketingTextCopy) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ChannelMarketingTextCopy) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ChannelMarketingTextCopy) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ChannelMarketingTextCopy) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *ChannelMarketingTextCopy) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ChannelMarketingTextCopy) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ChannelMarketingTextCopy) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ChannelMarketingTextCopy) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

