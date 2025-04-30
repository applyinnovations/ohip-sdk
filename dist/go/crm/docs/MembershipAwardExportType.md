# MembershipAwardExportType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AwardNumber** | Pointer to **float32** | Award Number to identify member&#39;s information. | [optional] 
**RecipientInfo** | Pointer to [**MembershipAwardRecipientInfoType**](MembershipAwardRecipientInfoType.md) |  | [optional] 
**UserDefinedFields** | Pointer to [**UserDefinedFieldsType**](UserDefinedFieldsType.md) |  | [optional] 

## Methods

### NewMembershipAwardExportType

`func NewMembershipAwardExportType() *MembershipAwardExportType`

NewMembershipAwardExportType instantiates a new MembershipAwardExportType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMembershipAwardExportTypeWithDefaults

`func NewMembershipAwardExportTypeWithDefaults() *MembershipAwardExportType`

NewMembershipAwardExportTypeWithDefaults instantiates a new MembershipAwardExportType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAwardNumber

`func (o *MembershipAwardExportType) GetAwardNumber() float32`

GetAwardNumber returns the AwardNumber field if non-nil, zero value otherwise.

### GetAwardNumberOk

`func (o *MembershipAwardExportType) GetAwardNumberOk() (*float32, bool)`

GetAwardNumberOk returns a tuple with the AwardNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAwardNumber

`func (o *MembershipAwardExportType) SetAwardNumber(v float32)`

SetAwardNumber sets AwardNumber field to given value.

### HasAwardNumber

`func (o *MembershipAwardExportType) HasAwardNumber() bool`

HasAwardNumber returns a boolean if a field has been set.

### GetRecipientInfo

`func (o *MembershipAwardExportType) GetRecipientInfo() MembershipAwardRecipientInfoType`

GetRecipientInfo returns the RecipientInfo field if non-nil, zero value otherwise.

### GetRecipientInfoOk

`func (o *MembershipAwardExportType) GetRecipientInfoOk() (*MembershipAwardRecipientInfoType, bool)`

GetRecipientInfoOk returns a tuple with the RecipientInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRecipientInfo

`func (o *MembershipAwardExportType) SetRecipientInfo(v MembershipAwardRecipientInfoType)`

SetRecipientInfo sets RecipientInfo field to given value.

### HasRecipientInfo

`func (o *MembershipAwardExportType) HasRecipientInfo() bool`

HasRecipientInfo returns a boolean if a field has been set.

### GetUserDefinedFields

`func (o *MembershipAwardExportType) GetUserDefinedFields() UserDefinedFieldsType`

GetUserDefinedFields returns the UserDefinedFields field if non-nil, zero value otherwise.

### GetUserDefinedFieldsOk

`func (o *MembershipAwardExportType) GetUserDefinedFieldsOk() (*UserDefinedFieldsType, bool)`

GetUserDefinedFieldsOk returns a tuple with the UserDefinedFields field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUserDefinedFields

`func (o *MembershipAwardExportType) SetUserDefinedFields(v UserDefinedFieldsType)`

SetUserDefinedFields sets UserDefinedFields field to given value.

### HasUserDefinedFields

`func (o *MembershipAwardExportType) HasUserDefinedFields() bool`

HasUserDefinedFields returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


