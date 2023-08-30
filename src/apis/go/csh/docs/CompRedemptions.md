# CompRedemptions

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CompRedemptions** | Pointer to [**[]RedemptionType**](RedemptionType.md) | Information regarding Complimentary Bucket Redemption object. | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewCompRedemptions

`func NewCompRedemptions() *CompRedemptions`

NewCompRedemptions instantiates a new CompRedemptions object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCompRedemptionsWithDefaults

`func NewCompRedemptionsWithDefaults() *CompRedemptions`

NewCompRedemptionsWithDefaults instantiates a new CompRedemptions object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCompRedemptions

`func (o *CompRedemptions) GetCompRedemptions() []RedemptionType`

GetCompRedemptions returns the CompRedemptions field if non-nil, zero value otherwise.

### GetCompRedemptionsOk

`func (o *CompRedemptions) GetCompRedemptionsOk() (*[]RedemptionType, bool)`

GetCompRedemptionsOk returns a tuple with the CompRedemptions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompRedemptions

`func (o *CompRedemptions) SetCompRedemptions(v []RedemptionType)`

SetCompRedemptions sets CompRedemptions field to given value.

### HasCompRedemptions

`func (o *CompRedemptions) HasCompRedemptions() bool`

HasCompRedemptions returns a boolean if a field has been set.

### GetWarnings

`func (o *CompRedemptions) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *CompRedemptions) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *CompRedemptions) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *CompRedemptions) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


