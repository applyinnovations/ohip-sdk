# PostMembershipNumberRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**GenerateMembershipNumberCriteria** | Pointer to [**GenerateMembershipNumberCriteriaType**](GenerateMembershipNumberCriteriaType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPostMembershipNumberRequest

`func NewPostMembershipNumberRequest() *PostMembershipNumberRequest`

NewPostMembershipNumberRequest instantiates a new PostMembershipNumberRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostMembershipNumberRequestWithDefaults

`func NewPostMembershipNumberRequestWithDefaults() *PostMembershipNumberRequest`

NewPostMembershipNumberRequestWithDefaults instantiates a new PostMembershipNumberRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetGenerateMembershipNumberCriteria

`func (o *PostMembershipNumberRequest) GetGenerateMembershipNumberCriteria() GenerateMembershipNumberCriteriaType`

GetGenerateMembershipNumberCriteria returns the GenerateMembershipNumberCriteria field if non-nil, zero value otherwise.

### GetGenerateMembershipNumberCriteriaOk

`func (o *PostMembershipNumberRequest) GetGenerateMembershipNumberCriteriaOk() (*GenerateMembershipNumberCriteriaType, bool)`

GetGenerateMembershipNumberCriteriaOk returns a tuple with the GenerateMembershipNumberCriteria field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGenerateMembershipNumberCriteria

`func (o *PostMembershipNumberRequest) SetGenerateMembershipNumberCriteria(v GenerateMembershipNumberCriteriaType)`

SetGenerateMembershipNumberCriteria sets GenerateMembershipNumberCriteria field to given value.

### HasGenerateMembershipNumberCriteria

`func (o *PostMembershipNumberRequest) HasGenerateMembershipNumberCriteria() bool`

HasGenerateMembershipNumberCriteria returns a boolean if a field has been set.

### GetLinks

`func (o *PostMembershipNumberRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PostMembershipNumberRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PostMembershipNumberRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PostMembershipNumberRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *PostMembershipNumberRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostMembershipNumberRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostMembershipNumberRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostMembershipNumberRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


