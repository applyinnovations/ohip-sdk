# OtherAwardsIssueCriteria

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IssueAwardsInfo** | Pointer to [**[]MembershipOtherAwardInfoType**](MembershipOtherAwardInfoType.md) | List of OTHER type awards information. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewOtherAwardsIssueCriteria

`func NewOtherAwardsIssueCriteria() *OtherAwardsIssueCriteria`

NewOtherAwardsIssueCriteria instantiates a new OtherAwardsIssueCriteria object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewOtherAwardsIssueCriteriaWithDefaults

`func NewOtherAwardsIssueCriteriaWithDefaults() *OtherAwardsIssueCriteria`

NewOtherAwardsIssueCriteriaWithDefaults instantiates a new OtherAwardsIssueCriteria object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetIssueAwardsInfo

`func (o *OtherAwardsIssueCriteria) GetIssueAwardsInfo() []MembershipOtherAwardInfoType`

GetIssueAwardsInfo returns the IssueAwardsInfo field if non-nil, zero value otherwise.

### GetIssueAwardsInfoOk

`func (o *OtherAwardsIssueCriteria) GetIssueAwardsInfoOk() (*[]MembershipOtherAwardInfoType, bool)`

GetIssueAwardsInfoOk returns a tuple with the IssueAwardsInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIssueAwardsInfo

`func (o *OtherAwardsIssueCriteria) SetIssueAwardsInfo(v []MembershipOtherAwardInfoType)`

SetIssueAwardsInfo sets IssueAwardsInfo field to given value.

### HasIssueAwardsInfo

`func (o *OtherAwardsIssueCriteria) HasIssueAwardsInfo() bool`

HasIssueAwardsInfo returns a boolean if a field has been set.

### GetLinks

`func (o *OtherAwardsIssueCriteria) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *OtherAwardsIssueCriteria) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *OtherAwardsIssueCriteria) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *OtherAwardsIssueCriteria) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *OtherAwardsIssueCriteria) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *OtherAwardsIssueCriteria) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *OtherAwardsIssueCriteria) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *OtherAwardsIssueCriteria) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


