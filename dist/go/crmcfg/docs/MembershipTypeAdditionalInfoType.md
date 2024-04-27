# MembershipTypeAdditionalInfoType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**EnrollmentLetter** | Pointer to **string** | When enrolling new members, this is the default letter to be sent. | [optional] 
**AdhocStatement** | Pointer to **string** | Default membership statement to be sent ad hoc. | [optional] 
**BatchStatement** | Pointer to **string** | Batch process statement. | [optional] 
**AutoWebEnrollment** | Pointer to **bool** | Automatically open to allow a web user account to be created. | [optional] 
**AutoUpdateWebLogin** | Pointer to **bool** | Automatically update web login. | [optional] 

## Methods

### NewMembershipTypeAdditionalInfoType

`func NewMembershipTypeAdditionalInfoType() *MembershipTypeAdditionalInfoType`

NewMembershipTypeAdditionalInfoType instantiates a new MembershipTypeAdditionalInfoType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMembershipTypeAdditionalInfoTypeWithDefaults

`func NewMembershipTypeAdditionalInfoTypeWithDefaults() *MembershipTypeAdditionalInfoType`

NewMembershipTypeAdditionalInfoTypeWithDefaults instantiates a new MembershipTypeAdditionalInfoType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEnrollmentLetter

`func (o *MembershipTypeAdditionalInfoType) GetEnrollmentLetter() string`

GetEnrollmentLetter returns the EnrollmentLetter field if non-nil, zero value otherwise.

### GetEnrollmentLetterOk

`func (o *MembershipTypeAdditionalInfoType) GetEnrollmentLetterOk() (*string, bool)`

GetEnrollmentLetterOk returns a tuple with the EnrollmentLetter field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnrollmentLetter

`func (o *MembershipTypeAdditionalInfoType) SetEnrollmentLetter(v string)`

SetEnrollmentLetter sets EnrollmentLetter field to given value.

### HasEnrollmentLetter

`func (o *MembershipTypeAdditionalInfoType) HasEnrollmentLetter() bool`

HasEnrollmentLetter returns a boolean if a field has been set.

### GetAdhocStatement

`func (o *MembershipTypeAdditionalInfoType) GetAdhocStatement() string`

GetAdhocStatement returns the AdhocStatement field if non-nil, zero value otherwise.

### GetAdhocStatementOk

`func (o *MembershipTypeAdditionalInfoType) GetAdhocStatementOk() (*string, bool)`

GetAdhocStatementOk returns a tuple with the AdhocStatement field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAdhocStatement

`func (o *MembershipTypeAdditionalInfoType) SetAdhocStatement(v string)`

SetAdhocStatement sets AdhocStatement field to given value.

### HasAdhocStatement

`func (o *MembershipTypeAdditionalInfoType) HasAdhocStatement() bool`

HasAdhocStatement returns a boolean if a field has been set.

### GetBatchStatement

`func (o *MembershipTypeAdditionalInfoType) GetBatchStatement() string`

GetBatchStatement returns the BatchStatement field if non-nil, zero value otherwise.

### GetBatchStatementOk

`func (o *MembershipTypeAdditionalInfoType) GetBatchStatementOk() (*string, bool)`

GetBatchStatementOk returns a tuple with the BatchStatement field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBatchStatement

`func (o *MembershipTypeAdditionalInfoType) SetBatchStatement(v string)`

SetBatchStatement sets BatchStatement field to given value.

### HasBatchStatement

`func (o *MembershipTypeAdditionalInfoType) HasBatchStatement() bool`

HasBatchStatement returns a boolean if a field has been set.

### GetAutoWebEnrollment

`func (o *MembershipTypeAdditionalInfoType) GetAutoWebEnrollment() bool`

GetAutoWebEnrollment returns the AutoWebEnrollment field if non-nil, zero value otherwise.

### GetAutoWebEnrollmentOk

`func (o *MembershipTypeAdditionalInfoType) GetAutoWebEnrollmentOk() (*bool, bool)`

GetAutoWebEnrollmentOk returns a tuple with the AutoWebEnrollment field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAutoWebEnrollment

`func (o *MembershipTypeAdditionalInfoType) SetAutoWebEnrollment(v bool)`

SetAutoWebEnrollment sets AutoWebEnrollment field to given value.

### HasAutoWebEnrollment

`func (o *MembershipTypeAdditionalInfoType) HasAutoWebEnrollment() bool`

HasAutoWebEnrollment returns a boolean if a field has been set.

### GetAutoUpdateWebLogin

`func (o *MembershipTypeAdditionalInfoType) GetAutoUpdateWebLogin() bool`

GetAutoUpdateWebLogin returns the AutoUpdateWebLogin field if non-nil, zero value otherwise.

### GetAutoUpdateWebLoginOk

`func (o *MembershipTypeAdditionalInfoType) GetAutoUpdateWebLoginOk() (*bool, bool)`

GetAutoUpdateWebLoginOk returns a tuple with the AutoUpdateWebLogin field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAutoUpdateWebLogin

`func (o *MembershipTypeAdditionalInfoType) SetAutoUpdateWebLogin(v bool)`

SetAutoUpdateWebLogin sets AutoUpdateWebLogin field to given value.

### HasAutoUpdateWebLogin

`func (o *MembershipTypeAdditionalInfoType) HasAutoUpdateWebLogin() bool`

HasAutoUpdateWebLogin returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


