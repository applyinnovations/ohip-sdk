# PutDiscountReasonsRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DiscountReasons** | Pointer to [**[]DiscountReasonType**](DiscountReasonType.md) | List of Discount Reasons. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPutDiscountReasonsRequest

`func NewPutDiscountReasonsRequest() *PutDiscountReasonsRequest`

NewPutDiscountReasonsRequest instantiates a new PutDiscountReasonsRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPutDiscountReasonsRequestWithDefaults

`func NewPutDiscountReasonsRequestWithDefaults() *PutDiscountReasonsRequest`

NewPutDiscountReasonsRequestWithDefaults instantiates a new PutDiscountReasonsRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDiscountReasons

`func (o *PutDiscountReasonsRequest) GetDiscountReasons() []DiscountReasonType`

GetDiscountReasons returns the DiscountReasons field if non-nil, zero value otherwise.

### GetDiscountReasonsOk

`func (o *PutDiscountReasonsRequest) GetDiscountReasonsOk() (*[]DiscountReasonType, bool)`

GetDiscountReasonsOk returns a tuple with the DiscountReasons field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDiscountReasons

`func (o *PutDiscountReasonsRequest) SetDiscountReasons(v []DiscountReasonType)`

SetDiscountReasons sets DiscountReasons field to given value.

### HasDiscountReasons

`func (o *PutDiscountReasonsRequest) HasDiscountReasons() bool`

HasDiscountReasons returns a boolean if a field has been set.

### GetLinks

`func (o *PutDiscountReasonsRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PutDiscountReasonsRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PutDiscountReasonsRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PutDiscountReasonsRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *PutDiscountReasonsRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PutDiscountReasonsRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PutDiscountReasonsRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PutDiscountReasonsRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


