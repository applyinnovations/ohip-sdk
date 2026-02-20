# GenerateType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**GenerateId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**Rule** | Pointer to [**GenerateCalcRuleType**](GenerateCalcRuleType.md) |  | [optional] 
**AddGeneratedAmtTo** | Pointer to [**GenerateCalculationBucketsType**](GenerateCalculationBucketsType.md) |  | [optional] 
**Level** | Pointer to [**GenerateLevelType**](GenerateLevelType.md) |  | [optional] 
**Code** | Pointer to **string** | Code. | [optional] 
**Description** | Pointer to **string** | description. | [optional] 

## Methods

### NewGenerateType

`func NewGenerateType() *GenerateType`

NewGenerateType instantiates a new GenerateType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGenerateTypeWithDefaults

`func NewGenerateTypeWithDefaults() *GenerateType`

NewGenerateTypeWithDefaults instantiates a new GenerateType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetGenerateId

`func (o *GenerateType) GetGenerateId() UniqueIDType`

GetGenerateId returns the GenerateId field if non-nil, zero value otherwise.

### GetGenerateIdOk

`func (o *GenerateType) GetGenerateIdOk() (*UniqueIDType, bool)`

GetGenerateIdOk returns a tuple with the GenerateId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGenerateId

`func (o *GenerateType) SetGenerateId(v UniqueIDType)`

SetGenerateId sets GenerateId field to given value.

### HasGenerateId

`func (o *GenerateType) HasGenerateId() bool`

HasGenerateId returns a boolean if a field has been set.

### GetRule

`func (o *GenerateType) GetRule() GenerateCalcRuleType`

GetRule returns the Rule field if non-nil, zero value otherwise.

### GetRuleOk

`func (o *GenerateType) GetRuleOk() (*GenerateCalcRuleType, bool)`

GetRuleOk returns a tuple with the Rule field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRule

`func (o *GenerateType) SetRule(v GenerateCalcRuleType)`

SetRule sets Rule field to given value.

### HasRule

`func (o *GenerateType) HasRule() bool`

HasRule returns a boolean if a field has been set.

### GetAddGeneratedAmtTo

`func (o *GenerateType) GetAddGeneratedAmtTo() GenerateCalculationBucketsType`

GetAddGeneratedAmtTo returns the AddGeneratedAmtTo field if non-nil, zero value otherwise.

### GetAddGeneratedAmtToOk

`func (o *GenerateType) GetAddGeneratedAmtToOk() (*GenerateCalculationBucketsType, bool)`

GetAddGeneratedAmtToOk returns a tuple with the AddGeneratedAmtTo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAddGeneratedAmtTo

`func (o *GenerateType) SetAddGeneratedAmtTo(v GenerateCalculationBucketsType)`

SetAddGeneratedAmtTo sets AddGeneratedAmtTo field to given value.

### HasAddGeneratedAmtTo

`func (o *GenerateType) HasAddGeneratedAmtTo() bool`

HasAddGeneratedAmtTo returns a boolean if a field has been set.

### GetLevel

`func (o *GenerateType) GetLevel() GenerateLevelType`

GetLevel returns the Level field if non-nil, zero value otherwise.

### GetLevelOk

`func (o *GenerateType) GetLevelOk() (*GenerateLevelType, bool)`

GetLevelOk returns a tuple with the Level field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLevel

`func (o *GenerateType) SetLevel(v GenerateLevelType)`

SetLevel sets Level field to given value.

### HasLevel

`func (o *GenerateType) HasLevel() bool`

HasLevel returns a boolean if a field has been set.

### GetCode

`func (o *GenerateType) GetCode() string`

GetCode returns the Code field if non-nil, zero value otherwise.

### GetCodeOk

`func (o *GenerateType) GetCodeOk() (*string, bool)`

GetCodeOk returns a tuple with the Code field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCode

`func (o *GenerateType) SetCode(v string)`

SetCode sets Code field to given value.

### HasCode

`func (o *GenerateType) HasCode() bool`

HasCode returns a boolean if a field has been set.

### GetDescription

`func (o *GenerateType) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *GenerateType) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *GenerateType) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *GenerateType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


