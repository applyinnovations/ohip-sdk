# ScriptType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ScriptId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**Language** | Pointer to **string** | Language identification. | [optional] 
**MembershipType** | Pointer to **string** | Membership Type the script belonged to. | [optional] 
**Script** | Pointer to **string** | Script. | [optional] 
**MergeCodes** | Pointer to [**[]MergeCodeType**](MergeCodeType.md) | A Merge Code. | [optional] 
**Type** | Pointer to [**ScriptTypeType**](ScriptTypeType.md) |  | [optional] 
**Locations** | Pointer to [**ScriptLocationsType**](ScriptLocationsType.md) |  | [optional] 

## Methods

### NewScriptType

`func NewScriptType() *ScriptType`

NewScriptType instantiates a new ScriptType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewScriptTypeWithDefaults

`func NewScriptTypeWithDefaults() *ScriptType`

NewScriptTypeWithDefaults instantiates a new ScriptType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetScriptId

`func (o *ScriptType) GetScriptId() UniqueIDType`

GetScriptId returns the ScriptId field if non-nil, zero value otherwise.

### GetScriptIdOk

`func (o *ScriptType) GetScriptIdOk() (*UniqueIDType, bool)`

GetScriptIdOk returns a tuple with the ScriptId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetScriptId

`func (o *ScriptType) SetScriptId(v UniqueIDType)`

SetScriptId sets ScriptId field to given value.

### HasScriptId

`func (o *ScriptType) HasScriptId() bool`

HasScriptId returns a boolean if a field has been set.

### GetLanguage

`func (o *ScriptType) GetLanguage() string`

GetLanguage returns the Language field if non-nil, zero value otherwise.

### GetLanguageOk

`func (o *ScriptType) GetLanguageOk() (*string, bool)`

GetLanguageOk returns a tuple with the Language field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLanguage

`func (o *ScriptType) SetLanguage(v string)`

SetLanguage sets Language field to given value.

### HasLanguage

`func (o *ScriptType) HasLanguage() bool`

HasLanguage returns a boolean if a field has been set.

### GetMembershipType

`func (o *ScriptType) GetMembershipType() string`

GetMembershipType returns the MembershipType field if non-nil, zero value otherwise.

### GetMembershipTypeOk

`func (o *ScriptType) GetMembershipTypeOk() (*string, bool)`

GetMembershipTypeOk returns a tuple with the MembershipType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMembershipType

`func (o *ScriptType) SetMembershipType(v string)`

SetMembershipType sets MembershipType field to given value.

### HasMembershipType

`func (o *ScriptType) HasMembershipType() bool`

HasMembershipType returns a boolean if a field has been set.

### GetScript

`func (o *ScriptType) GetScript() string`

GetScript returns the Script field if non-nil, zero value otherwise.

### GetScriptOk

`func (o *ScriptType) GetScriptOk() (*string, bool)`

GetScriptOk returns a tuple with the Script field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetScript

`func (o *ScriptType) SetScript(v string)`

SetScript sets Script field to given value.

### HasScript

`func (o *ScriptType) HasScript() bool`

HasScript returns a boolean if a field has been set.

### GetMergeCodes

`func (o *ScriptType) GetMergeCodes() []MergeCodeType`

GetMergeCodes returns the MergeCodes field if non-nil, zero value otherwise.

### GetMergeCodesOk

`func (o *ScriptType) GetMergeCodesOk() (*[]MergeCodeType, bool)`

GetMergeCodesOk returns a tuple with the MergeCodes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMergeCodes

`func (o *ScriptType) SetMergeCodes(v []MergeCodeType)`

SetMergeCodes sets MergeCodes field to given value.

### HasMergeCodes

`func (o *ScriptType) HasMergeCodes() bool`

HasMergeCodes returns a boolean if a field has been set.

### GetType

`func (o *ScriptType) GetType() ScriptTypeType`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *ScriptType) GetTypeOk() (*ScriptTypeType, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *ScriptType) SetType(v ScriptTypeType)`

SetType sets Type field to given value.

### HasType

`func (o *ScriptType) HasType() bool`

HasType returns a boolean if a field has been set.

### GetLocations

`func (o *ScriptType) GetLocations() ScriptLocationsType`

GetLocations returns the Locations field if non-nil, zero value otherwise.

### GetLocationsOk

`func (o *ScriptType) GetLocationsOk() (*ScriptLocationsType, bool)`

GetLocationsOk returns a tuple with the Locations field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLocations

`func (o *ScriptType) SetLocations(v ScriptLocationsType)`

SetLocations sets Locations field to given value.

### HasLocations

`func (o *ScriptType) HasLocations() bool`

HasLocations returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


