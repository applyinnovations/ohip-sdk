# PackageGroupType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Code** | Pointer to **string** | Package group Code. | [optional] 
**Description** | Pointer to **string** | Package group description. | [optional] 
**MembersList** | Pointer to [**PackageCodeListType**](PackageCodeListType.md) |  | [optional] 
**SellSeparate** | Pointer to **bool** | Can Package group be sold separately? | [optional] 
**ShortDescription** | Pointer to **string** | The short description of the package group. | [optional] 
**WebBookable** | Pointer to **bool** | Is Package group web bookable? | [optional] 

## Methods

### NewPackageGroupType

`func NewPackageGroupType() *PackageGroupType`

NewPackageGroupType instantiates a new PackageGroupType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPackageGroupTypeWithDefaults

`func NewPackageGroupTypeWithDefaults() *PackageGroupType`

NewPackageGroupTypeWithDefaults instantiates a new PackageGroupType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCode

`func (o *PackageGroupType) GetCode() string`

GetCode returns the Code field if non-nil, zero value otherwise.

### GetCodeOk

`func (o *PackageGroupType) GetCodeOk() (*string, bool)`

GetCodeOk returns a tuple with the Code field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCode

`func (o *PackageGroupType) SetCode(v string)`

SetCode sets Code field to given value.

### HasCode

`func (o *PackageGroupType) HasCode() bool`

HasCode returns a boolean if a field has been set.

### GetDescription

`func (o *PackageGroupType) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *PackageGroupType) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *PackageGroupType) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *PackageGroupType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetMembersList

`func (o *PackageGroupType) GetMembersList() PackageCodeListType`

GetMembersList returns the MembersList field if non-nil, zero value otherwise.

### GetMembersListOk

`func (o *PackageGroupType) GetMembersListOk() (*PackageCodeListType, bool)`

GetMembersListOk returns a tuple with the MembersList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMembersList

`func (o *PackageGroupType) SetMembersList(v PackageCodeListType)`

SetMembersList sets MembersList field to given value.

### HasMembersList

`func (o *PackageGroupType) HasMembersList() bool`

HasMembersList returns a boolean if a field has been set.

### GetSellSeparate

`func (o *PackageGroupType) GetSellSeparate() bool`

GetSellSeparate returns the SellSeparate field if non-nil, zero value otherwise.

### GetSellSeparateOk

`func (o *PackageGroupType) GetSellSeparateOk() (*bool, bool)`

GetSellSeparateOk returns a tuple with the SellSeparate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSellSeparate

`func (o *PackageGroupType) SetSellSeparate(v bool)`

SetSellSeparate sets SellSeparate field to given value.

### HasSellSeparate

`func (o *PackageGroupType) HasSellSeparate() bool`

HasSellSeparate returns a boolean if a field has been set.

### GetShortDescription

`func (o *PackageGroupType) GetShortDescription() string`

GetShortDescription returns the ShortDescription field if non-nil, zero value otherwise.

### GetShortDescriptionOk

`func (o *PackageGroupType) GetShortDescriptionOk() (*string, bool)`

GetShortDescriptionOk returns a tuple with the ShortDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetShortDescription

`func (o *PackageGroupType) SetShortDescription(v string)`

SetShortDescription sets ShortDescription field to given value.

### HasShortDescription

`func (o *PackageGroupType) HasShortDescription() bool`

HasShortDescription returns a boolean if a field has been set.

### GetWebBookable

`func (o *PackageGroupType) GetWebBookable() bool`

GetWebBookable returns the WebBookable field if non-nil, zero value otherwise.

### GetWebBookableOk

`func (o *PackageGroupType) GetWebBookableOk() (*bool, bool)`

GetWebBookableOk returns a tuple with the WebBookable field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWebBookable

`func (o *PackageGroupType) SetWebBookable(v bool)`

SetWebBookable sets WebBookable field to given value.

### HasWebBookable

`func (o *PackageGroupType) HasWebBookable() bool`

HasWebBookable returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


