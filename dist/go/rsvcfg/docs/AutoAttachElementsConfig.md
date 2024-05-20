# AutoAttachElementsConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AutoAttachRules** | Pointer to [**[]AutoAttachRuleType**](AutoAttachRuleType.md) | Auto attachment rule details. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**MasterInfoList** | Pointer to [**[]MasterInfoType**](MasterInfoType.md) | Refer to Generic common types document. | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewAutoAttachElementsConfig

`func NewAutoAttachElementsConfig() *AutoAttachElementsConfig`

NewAutoAttachElementsConfig instantiates a new AutoAttachElementsConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAutoAttachElementsConfigWithDefaults

`func NewAutoAttachElementsConfigWithDefaults() *AutoAttachElementsConfig`

NewAutoAttachElementsConfigWithDefaults instantiates a new AutoAttachElementsConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAutoAttachRules

`func (o *AutoAttachElementsConfig) GetAutoAttachRules() []AutoAttachRuleType`

GetAutoAttachRules returns the AutoAttachRules field if non-nil, zero value otherwise.

### GetAutoAttachRulesOk

`func (o *AutoAttachElementsConfig) GetAutoAttachRulesOk() (*[]AutoAttachRuleType, bool)`

GetAutoAttachRulesOk returns a tuple with the AutoAttachRules field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAutoAttachRules

`func (o *AutoAttachElementsConfig) SetAutoAttachRules(v []AutoAttachRuleType)`

SetAutoAttachRules sets AutoAttachRules field to given value.

### HasAutoAttachRules

`func (o *AutoAttachElementsConfig) HasAutoAttachRules() bool`

HasAutoAttachRules returns a boolean if a field has been set.

### GetLinks

`func (o *AutoAttachElementsConfig) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *AutoAttachElementsConfig) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *AutoAttachElementsConfig) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *AutoAttachElementsConfig) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetMasterInfoList

`func (o *AutoAttachElementsConfig) GetMasterInfoList() []MasterInfoType`

GetMasterInfoList returns the MasterInfoList field if non-nil, zero value otherwise.

### GetMasterInfoListOk

`func (o *AutoAttachElementsConfig) GetMasterInfoListOk() (*[]MasterInfoType, bool)`

GetMasterInfoListOk returns a tuple with the MasterInfoList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMasterInfoList

`func (o *AutoAttachElementsConfig) SetMasterInfoList(v []MasterInfoType)`

SetMasterInfoList sets MasterInfoList field to given value.

### HasMasterInfoList

`func (o *AutoAttachElementsConfig) HasMasterInfoList() bool`

HasMasterInfoList returns a boolean if a field has been set.

### GetWarnings

`func (o *AutoAttachElementsConfig) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *AutoAttachElementsConfig) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *AutoAttachElementsConfig) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *AutoAttachElementsConfig) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


