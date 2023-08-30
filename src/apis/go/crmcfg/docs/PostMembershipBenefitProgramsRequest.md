# PostMembershipBenefitProgramsRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**MembershipBenefitPrograms** | Pointer to [**[]MembershipBenefitProgramType**](MembershipBenefitProgramType.md) | Membership Benefit Program details. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPostMembershipBenefitProgramsRequest

`func NewPostMembershipBenefitProgramsRequest() *PostMembershipBenefitProgramsRequest`

NewPostMembershipBenefitProgramsRequest instantiates a new PostMembershipBenefitProgramsRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostMembershipBenefitProgramsRequestWithDefaults

`func NewPostMembershipBenefitProgramsRequestWithDefaults() *PostMembershipBenefitProgramsRequest`

NewPostMembershipBenefitProgramsRequestWithDefaults instantiates a new PostMembershipBenefitProgramsRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMembershipBenefitPrograms

`func (o *PostMembershipBenefitProgramsRequest) GetMembershipBenefitPrograms() []MembershipBenefitProgramType`

GetMembershipBenefitPrograms returns the MembershipBenefitPrograms field if non-nil, zero value otherwise.

### GetMembershipBenefitProgramsOk

`func (o *PostMembershipBenefitProgramsRequest) GetMembershipBenefitProgramsOk() (*[]MembershipBenefitProgramType, bool)`

GetMembershipBenefitProgramsOk returns a tuple with the MembershipBenefitPrograms field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMembershipBenefitPrograms

`func (o *PostMembershipBenefitProgramsRequest) SetMembershipBenefitPrograms(v []MembershipBenefitProgramType)`

SetMembershipBenefitPrograms sets MembershipBenefitPrograms field to given value.

### HasMembershipBenefitPrograms

`func (o *PostMembershipBenefitProgramsRequest) HasMembershipBenefitPrograms() bool`

HasMembershipBenefitPrograms returns a boolean if a field has been set.

### GetLinks

`func (o *PostMembershipBenefitProgramsRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PostMembershipBenefitProgramsRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PostMembershipBenefitProgramsRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PostMembershipBenefitProgramsRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *PostMembershipBenefitProgramsRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostMembershipBenefitProgramsRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostMembershipBenefitProgramsRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostMembershipBenefitProgramsRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


