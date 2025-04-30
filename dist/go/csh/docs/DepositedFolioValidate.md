# DepositedFolioValidate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**PolicyInfoList** | Pointer to [**[]ResDepositPolicyType**](ResDepositPolicyType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewDepositedFolioValidate

`func NewDepositedFolioValidate() *DepositedFolioValidate`

NewDepositedFolioValidate instantiates a new DepositedFolioValidate object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDepositedFolioValidateWithDefaults

`func NewDepositedFolioValidateWithDefaults() *DepositedFolioValidate`

NewDepositedFolioValidateWithDefaults instantiates a new DepositedFolioValidate object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetPolicyInfoList

`func (o *DepositedFolioValidate) GetPolicyInfoList() []ResDepositPolicyType`

GetPolicyInfoList returns the PolicyInfoList field if non-nil, zero value otherwise.

### GetPolicyInfoListOk

`func (o *DepositedFolioValidate) GetPolicyInfoListOk() (*[]ResDepositPolicyType, bool)`

GetPolicyInfoListOk returns a tuple with the PolicyInfoList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPolicyInfoList

`func (o *DepositedFolioValidate) SetPolicyInfoList(v []ResDepositPolicyType)`

SetPolicyInfoList sets PolicyInfoList field to given value.

### HasPolicyInfoList

`func (o *DepositedFolioValidate) HasPolicyInfoList() bool`

HasPolicyInfoList returns a boolean if a field has been set.

### GetLinks

`func (o *DepositedFolioValidate) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *DepositedFolioValidate) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *DepositedFolioValidate) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *DepositedFolioValidate) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *DepositedFolioValidate) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *DepositedFolioValidate) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *DepositedFolioValidate) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *DepositedFolioValidate) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


