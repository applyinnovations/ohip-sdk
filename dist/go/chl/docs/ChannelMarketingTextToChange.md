# ChannelMarketingTextToChange

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ChangeChannelMarketingTexts** | Pointer to [**[]MarketingTextType**](MarketingTextType.md) | List of channel marketing texts to be changed. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewChannelMarketingTextToChange

`func NewChannelMarketingTextToChange() *ChannelMarketingTextToChange`

NewChannelMarketingTextToChange instantiates a new ChannelMarketingTextToChange object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChannelMarketingTextToChangeWithDefaults

`func NewChannelMarketingTextToChangeWithDefaults() *ChannelMarketingTextToChange`

NewChannelMarketingTextToChangeWithDefaults instantiates a new ChannelMarketingTextToChange object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetChangeChannelMarketingTexts

`func (o *ChannelMarketingTextToChange) GetChangeChannelMarketingTexts() []MarketingTextType`

GetChangeChannelMarketingTexts returns the ChangeChannelMarketingTexts field if non-nil, zero value otherwise.

### GetChangeChannelMarketingTextsOk

`func (o *ChannelMarketingTextToChange) GetChangeChannelMarketingTextsOk() (*[]MarketingTextType, bool)`

GetChangeChannelMarketingTextsOk returns a tuple with the ChangeChannelMarketingTexts field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChangeChannelMarketingTexts

`func (o *ChannelMarketingTextToChange) SetChangeChannelMarketingTexts(v []MarketingTextType)`

SetChangeChannelMarketingTexts sets ChangeChannelMarketingTexts field to given value.

### HasChangeChannelMarketingTexts

`func (o *ChannelMarketingTextToChange) HasChangeChannelMarketingTexts() bool`

HasChangeChannelMarketingTexts returns a boolean if a field has been set.

### GetLinks

`func (o *ChannelMarketingTextToChange) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ChannelMarketingTextToChange) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ChannelMarketingTextToChange) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ChannelMarketingTextToChange) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *ChannelMarketingTextToChange) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ChannelMarketingTextToChange) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ChannelMarketingTextToChange) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ChannelMarketingTextToChange) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


