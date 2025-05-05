# TemplateJobTitleType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Code** | Pointer to **string** | Job Title Code. | [optional] 
**Description** | Pointer to [**TranslationTextType80**](TranslationTextType80.md) |  | [optional] 
**DisplayClosingScript** | Pointer to **bool** | Flag to indicate if display reservation closing script. | [optional] 

## Methods

### NewTemplateJobTitleType

`func NewTemplateJobTitleType() *TemplateJobTitleType`

NewTemplateJobTitleType instantiates a new TemplateJobTitleType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTemplateJobTitleTypeWithDefaults

`func NewTemplateJobTitleTypeWithDefaults() *TemplateJobTitleType`

NewTemplateJobTitleTypeWithDefaults instantiates a new TemplateJobTitleType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCode

`func (o *TemplateJobTitleType) GetCode() string`

GetCode returns the Code field if non-nil, zero value otherwise.

### GetCodeOk

`func (o *TemplateJobTitleType) GetCodeOk() (*string, bool)`

GetCodeOk returns a tuple with the Code field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCode

`func (o *TemplateJobTitleType) SetCode(v string)`

SetCode sets Code field to given value.

### HasCode

`func (o *TemplateJobTitleType) HasCode() bool`

HasCode returns a boolean if a field has been set.

### GetDescription

`func (o *TemplateJobTitleType) GetDescription() TranslationTextType80`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *TemplateJobTitleType) GetDescriptionOk() (*TranslationTextType80, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *TemplateJobTitleType) SetDescription(v TranslationTextType80)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *TemplateJobTitleType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetDisplayClosingScript

`func (o *TemplateJobTitleType) GetDisplayClosingScript() bool`

GetDisplayClosingScript returns the DisplayClosingScript field if non-nil, zero value otherwise.

### GetDisplayClosingScriptOk

`func (o *TemplateJobTitleType) GetDisplayClosingScriptOk() (*bool, bool)`

GetDisplayClosingScriptOk returns a tuple with the DisplayClosingScript field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisplayClosingScript

`func (o *TemplateJobTitleType) SetDisplayClosingScript(v bool)`

SetDisplayClosingScript sets DisplayClosingScript field to given value.

### HasDisplayClosingScript

`func (o *TemplateJobTitleType) HasDisplayClosingScript() bool`

HasDisplayClosingScript returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


