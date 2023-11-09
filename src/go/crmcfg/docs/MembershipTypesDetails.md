# MembershipTypesDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**MasterInfoList** | Pointer to [**[]MasterInfoType**](MasterInfoType.md) | Refer to Generic common types document. | [optional] 
**MembershipTypes** | Pointer to [**MembershipTypesType**](MembershipTypesType.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewMembershipTypesDetails

`func NewMembershipTypesDetails() *MembershipTypesDetails`

NewMembershipTypesDetails instantiates a new MembershipTypesDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMembershipTypesDetailsWithDefaults

`func NewMembershipTypesDetailsWithDefaults() *MembershipTypesDetails`

NewMembershipTypesDetailsWithDefaults instantiates a new MembershipTypesDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *MembershipTypesDetails) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *MembershipTypesDetails) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *MembershipTypesDetails) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *MembershipTypesDetails) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetMasterInfoList

`func (o *MembershipTypesDetails) GetMasterInfoList() []MasterInfoType`

GetMasterInfoList returns the MasterInfoList field if non-nil, zero value otherwise.

### GetMasterInfoListOk

`func (o *MembershipTypesDetails) GetMasterInfoListOk() (*[]MasterInfoType, bool)`

GetMasterInfoListOk returns a tuple with the MasterInfoList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMasterInfoList

`func (o *MembershipTypesDetails) SetMasterInfoList(v []MasterInfoType)`

SetMasterInfoList sets MasterInfoList field to given value.

### HasMasterInfoList

`func (o *MembershipTypesDetails) HasMasterInfoList() bool`

HasMasterInfoList returns a boolean if a field has been set.

### GetMembershipTypes

`func (o *MembershipTypesDetails) GetMembershipTypes() MembershipTypesType`

GetMembershipTypes returns the MembershipTypes field if non-nil, zero value otherwise.

### GetMembershipTypesOk

`func (o *MembershipTypesDetails) GetMembershipTypesOk() (*MembershipTypesType, bool)`

GetMembershipTypesOk returns a tuple with the MembershipTypes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMembershipTypes

`func (o *MembershipTypesDetails) SetMembershipTypes(v MembershipTypesType)`

SetMembershipTypes sets MembershipTypes field to given value.

### HasMembershipTypes

`func (o *MembershipTypesDetails) HasMembershipTypes() bool`

HasMembershipTypes returns a boolean if a field has been set.

### GetWarnings

`func (o *MembershipTypesDetails) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *MembershipTypesDetails) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *MembershipTypesDetails) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *MembershipTypesDetails) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


