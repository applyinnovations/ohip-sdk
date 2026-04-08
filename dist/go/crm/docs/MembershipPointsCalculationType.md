# MembershipPointsCalculationType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ProcessType** | Pointer to [**MembershipPointsCalculationProcessType**](MembershipPointsCalculationProcessType.md) |  | [optional] 
**MembershipType** | Pointer to **string** | Membership type for which point calculation process is to be run. | [optional] 
**AwardCode** | Pointer to **string** | Award Code to be used to generate awards for the membership type. Available for Automatic Generation of Awards (Issue Awards) only. | [optional] 
**CalculateUntilDate** | Pointer to **string** | The last date for which calculate or expire points. Available for Calculate Points and Expire Award Points only. | [optional] 

## Methods

### NewMembershipPointsCalculationType

`func NewMembershipPointsCalculationType() *MembershipPointsCalculationType`

NewMembershipPointsCalculationType instantiates a new MembershipPointsCalculationType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMembershipPointsCalculationTypeWithDefaults

`func NewMembershipPointsCalculationTypeWithDefaults() *MembershipPointsCalculationType`

NewMembershipPointsCalculationTypeWithDefaults instantiates a new MembershipPointsCalculationType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetProcessType

`func (o *MembershipPointsCalculationType) GetProcessType() MembershipPointsCalculationProcessType`

GetProcessType returns the ProcessType field if non-nil, zero value otherwise.

### GetProcessTypeOk

`func (o *MembershipPointsCalculationType) GetProcessTypeOk() (*MembershipPointsCalculationProcessType, bool)`

GetProcessTypeOk returns a tuple with the ProcessType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProcessType

`func (o *MembershipPointsCalculationType) SetProcessType(v MembershipPointsCalculationProcessType)`

SetProcessType sets ProcessType field to given value.

### HasProcessType

`func (o *MembershipPointsCalculationType) HasProcessType() bool`

HasProcessType returns a boolean if a field has been set.

### GetMembershipType

`func (o *MembershipPointsCalculationType) GetMembershipType() string`

GetMembershipType returns the MembershipType field if non-nil, zero value otherwise.

### GetMembershipTypeOk

`func (o *MembershipPointsCalculationType) GetMembershipTypeOk() (*string, bool)`

GetMembershipTypeOk returns a tuple with the MembershipType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMembershipType

`func (o *MembershipPointsCalculationType) SetMembershipType(v string)`

SetMembershipType sets MembershipType field to given value.

### HasMembershipType

`func (o *MembershipPointsCalculationType) HasMembershipType() bool`

HasMembershipType returns a boolean if a field has been set.

### GetAwardCode

`func (o *MembershipPointsCalculationType) GetAwardCode() string`

GetAwardCode returns the AwardCode field if non-nil, zero value otherwise.

### GetAwardCodeOk

`func (o *MembershipPointsCalculationType) GetAwardCodeOk() (*string, bool)`

GetAwardCodeOk returns a tuple with the AwardCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAwardCode

`func (o *MembershipPointsCalculationType) SetAwardCode(v string)`

SetAwardCode sets AwardCode field to given value.

### HasAwardCode

`func (o *MembershipPointsCalculationType) HasAwardCode() bool`

HasAwardCode returns a boolean if a field has been set.

### GetCalculateUntilDate

`func (o *MembershipPointsCalculationType) GetCalculateUntilDate() string`

GetCalculateUntilDate returns the CalculateUntilDate field if non-nil, zero value otherwise.

### GetCalculateUntilDateOk

`func (o *MembershipPointsCalculationType) GetCalculateUntilDateOk() (*string, bool)`

GetCalculateUntilDateOk returns a tuple with the CalculateUntilDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCalculateUntilDate

`func (o *MembershipPointsCalculationType) SetCalculateUntilDate(v string)`

SetCalculateUntilDate sets CalculateUntilDate field to given value.

### HasCalculateUntilDate

`func (o *MembershipPointsCalculationType) HasCalculateUntilDate() bool`

HasCalculateUntilDate returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


