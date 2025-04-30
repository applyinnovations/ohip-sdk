# IssuedAward

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IssueAwards** | Pointer to [**[]IssueAwardInfoType**](IssueAwardInfoType.md) | List of awards info. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewIssuedAward

`func NewIssuedAward() *IssuedAward`

NewIssuedAward instantiates a new IssuedAward object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewIssuedAwardWithDefaults

`func NewIssuedAwardWithDefaults() *IssuedAward`

NewIssuedAwardWithDefaults instantiates a new IssuedAward object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetIssueAwards

`func (o *IssuedAward) GetIssueAwards() []IssueAwardInfoType`

GetIssueAwards returns the IssueAwards field if non-nil, zero value otherwise.

### GetIssueAwardsOk

`func (o *IssuedAward) GetIssueAwardsOk() (*[]IssueAwardInfoType, bool)`

GetIssueAwardsOk returns a tuple with the IssueAwards field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIssueAwards

`func (o *IssuedAward) SetIssueAwards(v []IssueAwardInfoType)`

SetIssueAwards sets IssueAwards field to given value.

### HasIssueAwards

`func (o *IssuedAward) HasIssueAwards() bool`

HasIssueAwards returns a boolean if a field has been set.

### GetLinks

`func (o *IssuedAward) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *IssuedAward) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *IssuedAward) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *IssuedAward) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *IssuedAward) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *IssuedAward) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *IssuedAward) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *IssuedAward) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


