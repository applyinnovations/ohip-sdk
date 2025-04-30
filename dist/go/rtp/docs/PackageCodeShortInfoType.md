# PackageCodeShortInfoType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**PrimaryDetails** | Pointer to [**ConfigPackagePrimaryDetailsType**](ConfigPackagePrimaryDetailsType.md) |  | [optional] 
**TransactionDetails** | Pointer to [**ConfigPackageTransactionType**](ConfigPackageTransactionType.md) |  | [optional] 
**PostingAttributes** | Pointer to [**ConfigPostingAttributesType**](ConfigPostingAttributesType.md) |  | [optional] 
**Code** | Pointer to **string** | Package Code. | [optional] 
**Group** | Pointer to **bool** | Indicates if it is a Package Group or not. | [optional] 
**RedemptionProductYn** | Pointer to **string** | Indicates if package is a redemption package. | [optional] 
**UsedInAppSetting** | Pointer to **bool** | Flag to check the package code is used in application setting. | [optional] 
**ManagedBy** | Pointer to [**ManagedByOptions**](ManagedByOptions.md) |  | [optional] 

## Methods

### NewPackageCodeShortInfoType

`func NewPackageCodeShortInfoType() *PackageCodeShortInfoType`

NewPackageCodeShortInfoType instantiates a new PackageCodeShortInfoType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPackageCodeShortInfoTypeWithDefaults

`func NewPackageCodeShortInfoTypeWithDefaults() *PackageCodeShortInfoType`

NewPackageCodeShortInfoTypeWithDefaults instantiates a new PackageCodeShortInfoType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetPrimaryDetails

`func (o *PackageCodeShortInfoType) GetPrimaryDetails() ConfigPackagePrimaryDetailsType`

GetPrimaryDetails returns the PrimaryDetails field if non-nil, zero value otherwise.

### GetPrimaryDetailsOk

`func (o *PackageCodeShortInfoType) GetPrimaryDetailsOk() (*ConfigPackagePrimaryDetailsType, bool)`

GetPrimaryDetailsOk returns a tuple with the PrimaryDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrimaryDetails

`func (o *PackageCodeShortInfoType) SetPrimaryDetails(v ConfigPackagePrimaryDetailsType)`

SetPrimaryDetails sets PrimaryDetails field to given value.

### HasPrimaryDetails

`func (o *PackageCodeShortInfoType) HasPrimaryDetails() bool`

HasPrimaryDetails returns a boolean if a field has been set.

### GetTransactionDetails

`func (o *PackageCodeShortInfoType) GetTransactionDetails() ConfigPackageTransactionType`

GetTransactionDetails returns the TransactionDetails field if non-nil, zero value otherwise.

### GetTransactionDetailsOk

`func (o *PackageCodeShortInfoType) GetTransactionDetailsOk() (*ConfigPackageTransactionType, bool)`

GetTransactionDetailsOk returns a tuple with the TransactionDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionDetails

`func (o *PackageCodeShortInfoType) SetTransactionDetails(v ConfigPackageTransactionType)`

SetTransactionDetails sets TransactionDetails field to given value.

### HasTransactionDetails

`func (o *PackageCodeShortInfoType) HasTransactionDetails() bool`

HasTransactionDetails returns a boolean if a field has been set.

### GetPostingAttributes

`func (o *PackageCodeShortInfoType) GetPostingAttributes() ConfigPostingAttributesType`

GetPostingAttributes returns the PostingAttributes field if non-nil, zero value otherwise.

### GetPostingAttributesOk

`func (o *PackageCodeShortInfoType) GetPostingAttributesOk() (*ConfigPostingAttributesType, bool)`

GetPostingAttributesOk returns a tuple with the PostingAttributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPostingAttributes

`func (o *PackageCodeShortInfoType) SetPostingAttributes(v ConfigPostingAttributesType)`

SetPostingAttributes sets PostingAttributes field to given value.

### HasPostingAttributes

`func (o *PackageCodeShortInfoType) HasPostingAttributes() bool`

HasPostingAttributes returns a boolean if a field has been set.

### GetCode

`func (o *PackageCodeShortInfoType) GetCode() string`

GetCode returns the Code field if non-nil, zero value otherwise.

### GetCodeOk

`func (o *PackageCodeShortInfoType) GetCodeOk() (*string, bool)`

GetCodeOk returns a tuple with the Code field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCode

`func (o *PackageCodeShortInfoType) SetCode(v string)`

SetCode sets Code field to given value.

### HasCode

`func (o *PackageCodeShortInfoType) HasCode() bool`

HasCode returns a boolean if a field has been set.

### GetGroup

`func (o *PackageCodeShortInfoType) GetGroup() bool`

GetGroup returns the Group field if non-nil, zero value otherwise.

### GetGroupOk

`func (o *PackageCodeShortInfoType) GetGroupOk() (*bool, bool)`

GetGroupOk returns a tuple with the Group field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGroup

`func (o *PackageCodeShortInfoType) SetGroup(v bool)`

SetGroup sets Group field to given value.

### HasGroup

`func (o *PackageCodeShortInfoType) HasGroup() bool`

HasGroup returns a boolean if a field has been set.

### GetRedemptionProductYn

`func (o *PackageCodeShortInfoType) GetRedemptionProductYn() string`

GetRedemptionProductYn returns the RedemptionProductYn field if non-nil, zero value otherwise.

### GetRedemptionProductYnOk

`func (o *PackageCodeShortInfoType) GetRedemptionProductYnOk() (*string, bool)`

GetRedemptionProductYnOk returns a tuple with the RedemptionProductYn field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRedemptionProductYn

`func (o *PackageCodeShortInfoType) SetRedemptionProductYn(v string)`

SetRedemptionProductYn sets RedemptionProductYn field to given value.

### HasRedemptionProductYn

`func (o *PackageCodeShortInfoType) HasRedemptionProductYn() bool`

HasRedemptionProductYn returns a boolean if a field has been set.

### GetUsedInAppSetting

`func (o *PackageCodeShortInfoType) GetUsedInAppSetting() bool`

GetUsedInAppSetting returns the UsedInAppSetting field if non-nil, zero value otherwise.

### GetUsedInAppSettingOk

`func (o *PackageCodeShortInfoType) GetUsedInAppSettingOk() (*bool, bool)`

GetUsedInAppSettingOk returns a tuple with the UsedInAppSetting field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUsedInAppSetting

`func (o *PackageCodeShortInfoType) SetUsedInAppSetting(v bool)`

SetUsedInAppSetting sets UsedInAppSetting field to given value.

### HasUsedInAppSetting

`func (o *PackageCodeShortInfoType) HasUsedInAppSetting() bool`

HasUsedInAppSetting returns a boolean if a field has been set.

### GetManagedBy

`func (o *PackageCodeShortInfoType) GetManagedBy() ManagedByOptions`

GetManagedBy returns the ManagedBy field if non-nil, zero value otherwise.

### GetManagedByOk

`func (o *PackageCodeShortInfoType) GetManagedByOk() (*ManagedByOptions, bool)`

GetManagedByOk returns a tuple with the ManagedBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetManagedBy

`func (o *PackageCodeShortInfoType) SetManagedBy(v ManagedByOptions)`

SetManagedBy sets ManagedBy field to given value.

### HasManagedBy

`func (o *PackageCodeShortInfoType) HasManagedBy() bool`

HasManagedBy returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


