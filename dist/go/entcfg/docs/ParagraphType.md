# ParagraphType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Text** | Pointer to [**FormattedTextTextType**](FormattedTextTextType.md) |  | [optional] 
**Image** | Pointer to **string** | An image for this paragraph. | [optional] 
**Url** | Pointer to **string** | A URL for this paragraph. | [optional] 

## Methods

### NewParagraphType

`func NewParagraphType() *ParagraphType`

NewParagraphType instantiates a new ParagraphType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewParagraphTypeWithDefaults

`func NewParagraphTypeWithDefaults() *ParagraphType`

NewParagraphTypeWithDefaults instantiates a new ParagraphType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetText

`func (o *ParagraphType) GetText() FormattedTextTextType`

GetText returns the Text field if non-nil, zero value otherwise.

### GetTextOk

`func (o *ParagraphType) GetTextOk() (*FormattedTextTextType, bool)`

GetTextOk returns a tuple with the Text field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetText

`func (o *ParagraphType) SetText(v FormattedTextTextType)`

SetText sets Text field to given value.

### HasText

`func (o *ParagraphType) HasText() bool`

HasText returns a boolean if a field has been set.

### GetImage

`func (o *ParagraphType) GetImage() string`

GetImage returns the Image field if non-nil, zero value otherwise.

### GetImageOk

`func (o *ParagraphType) GetImageOk() (*string, bool)`

GetImageOk returns a tuple with the Image field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetImage

`func (o *ParagraphType) SetImage(v string)`

SetImage sets Image field to given value.

### HasImage

`func (o *ParagraphType) HasImage() bool`

HasImage returns a boolean if a field has been set.

### GetUrl

`func (o *ParagraphType) GetUrl() string`

GetUrl returns the Url field if non-nil, zero value otherwise.

### GetUrlOk

`func (o *ParagraphType) GetUrlOk() (*string, bool)`

GetUrlOk returns a tuple with the Url field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUrl

`func (o *ParagraphType) SetUrl(v string)`

SetUrl sets Url field to given value.

### HasUrl

`func (o *ParagraphType) HasUrl() bool`

HasUrl returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


