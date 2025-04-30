# JobTitleType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Code** | Pointer to **string** | Job Title Code. | [optional] 
**Description** | Pointer to [**TranslationTextType80**](TranslationTextType80.md) |  | [optional] 
**DisplayClosingScript** | Pointer to **bool** | Flag to indicate if display reservation closing script. | [optional] 
**HotelId** | Pointer to **string** | Property Code where the job title belongs to. | [optional] 

## Methods

### NewJobTitleType

`func NewJobTitleType() *JobTitleType`

NewJobTitleType instantiates a new JobTitleType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewJobTitleTypeWithDefaults

`func NewJobTitleTypeWithDefaults() *JobTitleType`

NewJobTitleTypeWithDefaults instantiates a new JobTitleType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCode

`func (o *JobTitleType) GetCode() string`

GetCode returns the Code field if non-nil, zero value otherwise.

### GetCodeOk

`func (o *JobTitleType) GetCodeOk() (*string, bool)`

GetCodeOk returns a tuple with the Code field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCode

`func (o *JobTitleType) SetCode(v string)`

SetCode sets Code field to given value.

### HasCode

`func (o *JobTitleType) HasCode() bool`

HasCode returns a boolean if a field has been set.

### GetDescription

`func (o *JobTitleType) GetDescription() TranslationTextType80`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *JobTitleType) GetDescriptionOk() (*TranslationTextType80, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *JobTitleType) SetDescription(v TranslationTextType80)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *JobTitleType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetDisplayClosingScript

`func (o *JobTitleType) GetDisplayClosingScript() bool`

GetDisplayClosingScript returns the DisplayClosingScript field if non-nil, zero value otherwise.

### GetDisplayClosingScriptOk

`func (o *JobTitleType) GetDisplayClosingScriptOk() (*bool, bool)`

GetDisplayClosingScriptOk returns a tuple with the DisplayClosingScript field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisplayClosingScript

`func (o *JobTitleType) SetDisplayClosingScript(v bool)`

SetDisplayClosingScript sets DisplayClosingScript field to given value.

### HasDisplayClosingScript

`func (o *JobTitleType) HasDisplayClosingScript() bool`

HasDisplayClosingScript returns a boolean if a field has been set.

### GetHotelId

`func (o *JobTitleType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *JobTitleType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *JobTitleType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *JobTitleType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


