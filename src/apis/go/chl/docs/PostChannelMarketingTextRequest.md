# PostChannelMarketingTextRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CreateChannelMarketingTexts** | Pointer to [**[]MarketingTextType**](MarketingTextType.md) | List of channel marketing texts to be created. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPostChannelMarketingTextRequest

`func NewPostChannelMarketingTextRequest() *PostChannelMarketingTextRequest`

NewPostChannelMarketingTextRequest instantiates a new PostChannelMarketingTextRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostChannelMarketingTextRequestWithDefaults

`func NewPostChannelMarketingTextRequestWithDefaults() *PostChannelMarketingTextRequest`

NewPostChannelMarketingTextRequestWithDefaults instantiates a new PostChannelMarketingTextRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCreateChannelMarketingTexts

`func (o *PostChannelMarketingTextRequest) GetCreateChannelMarketingTexts() []MarketingTextType`

GetCreateChannelMarketingTexts returns the CreateChannelMarketingTexts field if non-nil, zero value otherwise.

### GetCreateChannelMarketingTextsOk

`func (o *PostChannelMarketingTextRequest) GetCreateChannelMarketingTextsOk() (*[]MarketingTextType, bool)`

GetCreateChannelMarketingTextsOk returns a tuple with the CreateChannelMarketingTexts field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreateChannelMarketingTexts

`func (o *PostChannelMarketingTextRequest) SetCreateChannelMarketingTexts(v []MarketingTextType)`

SetCreateChannelMarketingTexts sets CreateChannelMarketingTexts field to given value.

### HasCreateChannelMarketingTexts

`func (o *PostChannelMarketingTextRequest) HasCreateChannelMarketingTexts() bool`

HasCreateChannelMarketingTexts returns a boolean if a field has been set.

### GetLinks

`func (o *PostChannelMarketingTextRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PostChannelMarketingTextRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PostChannelMarketingTextRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PostChannelMarketingTextRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *PostChannelMarketingTextRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostChannelMarketingTextRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostChannelMarketingTextRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostChannelMarketingTextRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


