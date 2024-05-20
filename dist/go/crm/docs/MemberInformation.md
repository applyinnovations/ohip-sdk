# MemberInformation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**MemberInfo** | Pointer to [**MemberInfoRSType**](MemberInfoRSType.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewMemberInformation

`func NewMemberInformation() *MemberInformation`

NewMemberInformation instantiates a new MemberInformation object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMemberInformationWithDefaults

`func NewMemberInformationWithDefaults() *MemberInformation`

NewMemberInformationWithDefaults instantiates a new MemberInformation object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *MemberInformation) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *MemberInformation) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *MemberInformation) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *MemberInformation) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetMemberInfo

`func (o *MemberInformation) GetMemberInfo() MemberInfoRSType`

GetMemberInfo returns the MemberInfo field if non-nil, zero value otherwise.

### GetMemberInfoOk

`func (o *MemberInformation) GetMemberInfoOk() (*MemberInfoRSType, bool)`

GetMemberInfoOk returns a tuple with the MemberInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMemberInfo

`func (o *MemberInformation) SetMemberInfo(v MemberInfoRSType)`

SetMemberInfo sets MemberInfo field to given value.

### HasMemberInfo

`func (o *MemberInformation) HasMemberInfo() bool`

HasMemberInfo returns a boolean if a field has been set.

### GetWarnings

`func (o *MemberInformation) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *MemberInformation) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *MemberInformation) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *MemberInformation) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


