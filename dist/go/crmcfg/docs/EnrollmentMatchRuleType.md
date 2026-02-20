# EnrollmentMatchRuleType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**MembershipEnrollmentMatchRule** | Pointer to **string** | Enrollment Match Rule for Membership Type. | [optional] 
**UserDefinedEnrollmentFields** | Pointer to [**[]UserDefinedEnrollmentFieldType**](UserDefinedEnrollmentFieldType.md) | Type that holds the User Defined Enrollment field/Attribute such as Communication, First Name , Last Name etc. | [optional] 
**AdvancedEnrollment** | Pointer to **bool** | Indicates if the Advanced Enrollment is enabled for Membership Type. Advanced Enrollment is required tp apply Membership Enrollment Match Rule and User Defined Enrollment Fields/Attributes. | [optional] 

## Methods

### NewEnrollmentMatchRuleType

`func NewEnrollmentMatchRuleType() *EnrollmentMatchRuleType`

NewEnrollmentMatchRuleType instantiates a new EnrollmentMatchRuleType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEnrollmentMatchRuleTypeWithDefaults

`func NewEnrollmentMatchRuleTypeWithDefaults() *EnrollmentMatchRuleType`

NewEnrollmentMatchRuleTypeWithDefaults instantiates a new EnrollmentMatchRuleType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMembershipEnrollmentMatchRule

`func (o *EnrollmentMatchRuleType) GetMembershipEnrollmentMatchRule() string`

GetMembershipEnrollmentMatchRule returns the MembershipEnrollmentMatchRule field if non-nil, zero value otherwise.

### GetMembershipEnrollmentMatchRuleOk

`func (o *EnrollmentMatchRuleType) GetMembershipEnrollmentMatchRuleOk() (*string, bool)`

GetMembershipEnrollmentMatchRuleOk returns a tuple with the MembershipEnrollmentMatchRule field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMembershipEnrollmentMatchRule

`func (o *EnrollmentMatchRuleType) SetMembershipEnrollmentMatchRule(v string)`

SetMembershipEnrollmentMatchRule sets MembershipEnrollmentMatchRule field to given value.

### HasMembershipEnrollmentMatchRule

`func (o *EnrollmentMatchRuleType) HasMembershipEnrollmentMatchRule() bool`

HasMembershipEnrollmentMatchRule returns a boolean if a field has been set.

### GetUserDefinedEnrollmentFields

`func (o *EnrollmentMatchRuleType) GetUserDefinedEnrollmentFields() []UserDefinedEnrollmentFieldType`

GetUserDefinedEnrollmentFields returns the UserDefinedEnrollmentFields field if non-nil, zero value otherwise.

### GetUserDefinedEnrollmentFieldsOk

`func (o *EnrollmentMatchRuleType) GetUserDefinedEnrollmentFieldsOk() (*[]UserDefinedEnrollmentFieldType, bool)`

GetUserDefinedEnrollmentFieldsOk returns a tuple with the UserDefinedEnrollmentFields field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUserDefinedEnrollmentFields

`func (o *EnrollmentMatchRuleType) SetUserDefinedEnrollmentFields(v []UserDefinedEnrollmentFieldType)`

SetUserDefinedEnrollmentFields sets UserDefinedEnrollmentFields field to given value.

### HasUserDefinedEnrollmentFields

`func (o *EnrollmentMatchRuleType) HasUserDefinedEnrollmentFields() bool`

HasUserDefinedEnrollmentFields returns a boolean if a field has been set.

### GetAdvancedEnrollment

`func (o *EnrollmentMatchRuleType) GetAdvancedEnrollment() bool`

GetAdvancedEnrollment returns the AdvancedEnrollment field if non-nil, zero value otherwise.

### GetAdvancedEnrollmentOk

`func (o *EnrollmentMatchRuleType) GetAdvancedEnrollmentOk() (*bool, bool)`

GetAdvancedEnrollmentOk returns a tuple with the AdvancedEnrollment field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAdvancedEnrollment

`func (o *EnrollmentMatchRuleType) SetAdvancedEnrollment(v bool)`

SetAdvancedEnrollment sets AdvancedEnrollment field to given value.

### HasAdvancedEnrollment

`func (o *EnrollmentMatchRuleType) HasAdvancedEnrollment() bool`

HasAdvancedEnrollment returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


