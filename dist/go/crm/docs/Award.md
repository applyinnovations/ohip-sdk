# Award

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**MemberAward** | Pointer to [**MemberAwardType**](MemberAwardType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewAward

`func NewAward() *Award`

NewAward instantiates a new Award object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAwardWithDefaults

`func NewAwardWithDefaults() *Award`

NewAwardWithDefaults instantiates a new Award object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMemberAward

`func (o *Award) GetMemberAward() MemberAwardType`

GetMemberAward returns the MemberAward field if non-nil, zero value otherwise.

### GetMemberAwardOk

`func (o *Award) GetMemberAwardOk() (*MemberAwardType, bool)`

GetMemberAwardOk returns a tuple with the MemberAward field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMemberAward

`func (o *Award) SetMemberAward(v MemberAwardType)`

SetMemberAward sets MemberAward field to given value.

### HasMemberAward

`func (o *Award) HasMemberAward() bool`

HasMemberAward returns a boolean if a field has been set.

### GetLinks

`func (o *Award) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *Award) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *Award) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *Award) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *Award) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *Award) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *Award) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *Award) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


