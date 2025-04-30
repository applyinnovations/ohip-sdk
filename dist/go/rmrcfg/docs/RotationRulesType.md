# RotationRulesType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelId** | Pointer to **string** | Hotel code for Room Rotation Setup Rules. | [optional] 
**SetupType** | Pointer to [**RotationRuleSetupType**](RotationRuleSetupType.md) |  | [optional] 
**Rule** | Pointer to [**[]RotationRuleType**](RotationRuleType.md) | Description of the Room Rotation Setup Rule. | [optional] 

## Methods

### NewRotationRulesType

`func NewRotationRulesType() *RotationRulesType`

NewRotationRulesType instantiates a new RotationRulesType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRotationRulesTypeWithDefaults

`func NewRotationRulesTypeWithDefaults() *RotationRulesType`

NewRotationRulesTypeWithDefaults instantiates a new RotationRulesType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelId

`func (o *RotationRulesType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *RotationRulesType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *RotationRulesType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *RotationRulesType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetSetupType

`func (o *RotationRulesType) GetSetupType() RotationRuleSetupType`

GetSetupType returns the SetupType field if non-nil, zero value otherwise.

### GetSetupTypeOk

`func (o *RotationRulesType) GetSetupTypeOk() (*RotationRuleSetupType, bool)`

GetSetupTypeOk returns a tuple with the SetupType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSetupType

`func (o *RotationRulesType) SetSetupType(v RotationRuleSetupType)`

SetSetupType sets SetupType field to given value.

### HasSetupType

`func (o *RotationRulesType) HasSetupType() bool`

HasSetupType returns a boolean if a field has been set.

### GetRule

`func (o *RotationRulesType) GetRule() []RotationRuleType`

GetRule returns the Rule field if non-nil, zero value otherwise.

### GetRuleOk

`func (o *RotationRulesType) GetRuleOk() (*[]RotationRuleType, bool)`

GetRuleOk returns a tuple with the Rule field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRule

`func (o *RotationRulesType) SetRule(v []RotationRuleType)`

SetRule sets Rule field to given value.

### HasRule

`func (o *RotationRulesType) HasRule() bool`

HasRule returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


