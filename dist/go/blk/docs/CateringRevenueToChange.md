# CateringRevenueToChange

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**EventId** | Pointer to [**EventId**](EventId.md) |  | [optional] 
**ExpectedRevenue** | Pointer to **bool** | Indicates if the expected revenue will be corrected. | [optional] 
**GuaranteedRevenue** | Pointer to **bool** | Indicates if the guaranteed revenue will be corrected. | [optional] 
**ActualRevenue** | Pointer to **bool** | Indicates if the actual revenue will be corrected. | [optional] 
**BilledRevenue** | Pointer to **bool** | Indicates if the billed revenue will be corrected. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewCateringRevenueToChange

`func NewCateringRevenueToChange() *CateringRevenueToChange`

NewCateringRevenueToChange instantiates a new CateringRevenueToChange object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCateringRevenueToChangeWithDefaults

`func NewCateringRevenueToChangeWithDefaults() *CateringRevenueToChange`

NewCateringRevenueToChangeWithDefaults instantiates a new CateringRevenueToChange object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEventId

`func (o *CateringRevenueToChange) GetEventId() EventId`

GetEventId returns the EventId field if non-nil, zero value otherwise.

### GetEventIdOk

`func (o *CateringRevenueToChange) GetEventIdOk() (*EventId, bool)`

GetEventIdOk returns a tuple with the EventId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventId

`func (o *CateringRevenueToChange) SetEventId(v EventId)`

SetEventId sets EventId field to given value.

### HasEventId

`func (o *CateringRevenueToChange) HasEventId() bool`

HasEventId returns a boolean if a field has been set.

### GetExpectedRevenue

`func (o *CateringRevenueToChange) GetExpectedRevenue() bool`

GetExpectedRevenue returns the ExpectedRevenue field if non-nil, zero value otherwise.

### GetExpectedRevenueOk

`func (o *CateringRevenueToChange) GetExpectedRevenueOk() (*bool, bool)`

GetExpectedRevenueOk returns a tuple with the ExpectedRevenue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExpectedRevenue

`func (o *CateringRevenueToChange) SetExpectedRevenue(v bool)`

SetExpectedRevenue sets ExpectedRevenue field to given value.

### HasExpectedRevenue

`func (o *CateringRevenueToChange) HasExpectedRevenue() bool`

HasExpectedRevenue returns a boolean if a field has been set.

### GetGuaranteedRevenue

`func (o *CateringRevenueToChange) GetGuaranteedRevenue() bool`

GetGuaranteedRevenue returns the GuaranteedRevenue field if non-nil, zero value otherwise.

### GetGuaranteedRevenueOk

`func (o *CateringRevenueToChange) GetGuaranteedRevenueOk() (*bool, bool)`

GetGuaranteedRevenueOk returns a tuple with the GuaranteedRevenue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGuaranteedRevenue

`func (o *CateringRevenueToChange) SetGuaranteedRevenue(v bool)`

SetGuaranteedRevenue sets GuaranteedRevenue field to given value.

### HasGuaranteedRevenue

`func (o *CateringRevenueToChange) HasGuaranteedRevenue() bool`

HasGuaranteedRevenue returns a boolean if a field has been set.

### GetActualRevenue

`func (o *CateringRevenueToChange) GetActualRevenue() bool`

GetActualRevenue returns the ActualRevenue field if non-nil, zero value otherwise.

### GetActualRevenueOk

`func (o *CateringRevenueToChange) GetActualRevenueOk() (*bool, bool)`

GetActualRevenueOk returns a tuple with the ActualRevenue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActualRevenue

`func (o *CateringRevenueToChange) SetActualRevenue(v bool)`

SetActualRevenue sets ActualRevenue field to given value.

### HasActualRevenue

`func (o *CateringRevenueToChange) HasActualRevenue() bool`

HasActualRevenue returns a boolean if a field has been set.

### GetBilledRevenue

`func (o *CateringRevenueToChange) GetBilledRevenue() bool`

GetBilledRevenue returns the BilledRevenue field if non-nil, zero value otherwise.

### GetBilledRevenueOk

`func (o *CateringRevenueToChange) GetBilledRevenueOk() (*bool, bool)`

GetBilledRevenueOk returns a tuple with the BilledRevenue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBilledRevenue

`func (o *CateringRevenueToChange) SetBilledRevenue(v bool)`

SetBilledRevenue sets BilledRevenue field to given value.

### HasBilledRevenue

`func (o *CateringRevenueToChange) HasBilledRevenue() bool`

HasBilledRevenue returns a boolean if a field has been set.

### GetLinks

`func (o *CateringRevenueToChange) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *CateringRevenueToChange) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *CateringRevenueToChange) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *CateringRevenueToChange) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *CateringRevenueToChange) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *CateringRevenueToChange) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *CateringRevenueToChange) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *CateringRevenueToChange) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


