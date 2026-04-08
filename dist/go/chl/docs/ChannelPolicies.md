# ChannelPolicies

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ChannelPoliciesInfo** | Pointer to [**[]ChannelPolicyType**](ChannelPolicyType.md) | To list down all the policies associated with the relevant input request. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewChannelPolicies

`func NewChannelPolicies() *ChannelPolicies`

NewChannelPolicies instantiates a new ChannelPolicies object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChannelPoliciesWithDefaults

`func NewChannelPoliciesWithDefaults() *ChannelPolicies`

NewChannelPoliciesWithDefaults instantiates a new ChannelPolicies object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetChannelPoliciesInfo

`func (o *ChannelPolicies) GetChannelPoliciesInfo() []ChannelPolicyType`

GetChannelPoliciesInfo returns the ChannelPoliciesInfo field if non-nil, zero value otherwise.

### GetChannelPoliciesInfoOk

`func (o *ChannelPolicies) GetChannelPoliciesInfoOk() (*[]ChannelPolicyType, bool)`

GetChannelPoliciesInfoOk returns a tuple with the ChannelPoliciesInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChannelPoliciesInfo

`func (o *ChannelPolicies) SetChannelPoliciesInfo(v []ChannelPolicyType)`

SetChannelPoliciesInfo sets ChannelPoliciesInfo field to given value.

### HasChannelPoliciesInfo

`func (o *ChannelPolicies) HasChannelPoliciesInfo() bool`

HasChannelPoliciesInfo returns a boolean if a field has been set.

### GetLinks

`func (o *ChannelPolicies) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ChannelPolicies) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ChannelPolicies) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ChannelPolicies) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *ChannelPolicies) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ChannelPolicies) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ChannelPolicies) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ChannelPolicies) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


