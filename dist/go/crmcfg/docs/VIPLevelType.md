# VIPLevelType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Code** | Pointer to **string** | Common Master unique code. | [optional] 
**Description** | Pointer to [**TranslationTextType2000**](TranslationTextType2000.md) |  | [optional] 
**DisplayColor** | Pointer to [**CommonMasterColorType**](CommonMasterColorType.md) |  | [optional] 
**DisplayOrder** | Pointer to **float32** | Common Master record sequence number. | [optional] 
**Ranking** | Pointer to **int32** | AI priority order of this code. | [optional] 

## Methods

### NewVIPLevelType

`func NewVIPLevelType() *VIPLevelType`

NewVIPLevelType instantiates a new VIPLevelType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewVIPLevelTypeWithDefaults

`func NewVIPLevelTypeWithDefaults() *VIPLevelType`

NewVIPLevelTypeWithDefaults instantiates a new VIPLevelType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCode

`func (o *VIPLevelType) GetCode() string`

GetCode returns the Code field if non-nil, zero value otherwise.

### GetCodeOk

`func (o *VIPLevelType) GetCodeOk() (*string, bool)`

GetCodeOk returns a tuple with the Code field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCode

`func (o *VIPLevelType) SetCode(v string)`

SetCode sets Code field to given value.

### HasCode

`func (o *VIPLevelType) HasCode() bool`

HasCode returns a boolean if a field has been set.

### GetDescription

`func (o *VIPLevelType) GetDescription() TranslationTextType2000`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *VIPLevelType) GetDescriptionOk() (*TranslationTextType2000, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *VIPLevelType) SetDescription(v TranslationTextType2000)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *VIPLevelType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetDisplayColor

`func (o *VIPLevelType) GetDisplayColor() CommonMasterColorType`

GetDisplayColor returns the DisplayColor field if non-nil, zero value otherwise.

### GetDisplayColorOk

`func (o *VIPLevelType) GetDisplayColorOk() (*CommonMasterColorType, bool)`

GetDisplayColorOk returns a tuple with the DisplayColor field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisplayColor

`func (o *VIPLevelType) SetDisplayColor(v CommonMasterColorType)`

SetDisplayColor sets DisplayColor field to given value.

### HasDisplayColor

`func (o *VIPLevelType) HasDisplayColor() bool`

HasDisplayColor returns a boolean if a field has been set.

### GetDisplayOrder

`func (o *VIPLevelType) GetDisplayOrder() float32`

GetDisplayOrder returns the DisplayOrder field if non-nil, zero value otherwise.

### GetDisplayOrderOk

`func (o *VIPLevelType) GetDisplayOrderOk() (*float32, bool)`

GetDisplayOrderOk returns a tuple with the DisplayOrder field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisplayOrder

`func (o *VIPLevelType) SetDisplayOrder(v float32)`

SetDisplayOrder sets DisplayOrder field to given value.

### HasDisplayOrder

`func (o *VIPLevelType) HasDisplayOrder() bool`

HasDisplayOrder returns a boolean if a field has been set.

### GetRanking

`func (o *VIPLevelType) GetRanking() int32`

GetRanking returns the Ranking field if non-nil, zero value otherwise.

### GetRankingOk

`func (o *VIPLevelType) GetRankingOk() (*int32, bool)`

GetRankingOk returns a tuple with the Ranking field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRanking

`func (o *VIPLevelType) SetRanking(v int32)`

SetRanking sets Ranking field to given value.

### HasRanking

`func (o *VIPLevelType) HasRanking() bool`

HasRanking returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


