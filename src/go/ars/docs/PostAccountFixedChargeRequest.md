# PostAccountFixedChargeRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**FixedChargeInfo** | Pointer to [**ARAccountFixedChargeCriteriaType**](ARAccountFixedChargeCriteriaType.md) |  | [optional] 
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewPostAccountFixedChargeRequest

`func NewPostAccountFixedChargeRequest() *PostAccountFixedChargeRequest`

NewPostAccountFixedChargeRequest instantiates a new PostAccountFixedChargeRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostAccountFixedChargeRequestWithDefaults

`func NewPostAccountFixedChargeRequestWithDefaults() *PostAccountFixedChargeRequest`

NewPostAccountFixedChargeRequestWithDefaults instantiates a new PostAccountFixedChargeRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetFixedChargeInfo

`func (o *PostAccountFixedChargeRequest) GetFixedChargeInfo() ARAccountFixedChargeCriteriaType`

GetFixedChargeInfo returns the FixedChargeInfo field if non-nil, zero value otherwise.

### GetFixedChargeInfoOk

`func (o *PostAccountFixedChargeRequest) GetFixedChargeInfoOk() (*ARAccountFixedChargeCriteriaType, bool)`

GetFixedChargeInfoOk returns a tuple with the FixedChargeInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFixedChargeInfo

`func (o *PostAccountFixedChargeRequest) SetFixedChargeInfo(v ARAccountFixedChargeCriteriaType)`

SetFixedChargeInfo sets FixedChargeInfo field to given value.

### HasFixedChargeInfo

`func (o *PostAccountFixedChargeRequest) HasFixedChargeInfo() bool`

HasFixedChargeInfo returns a boolean if a field has been set.

### GetLinks

`func (o *PostAccountFixedChargeRequest) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PostAccountFixedChargeRequest) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PostAccountFixedChargeRequest) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PostAccountFixedChargeRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *PostAccountFixedChargeRequest) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostAccountFixedChargeRequest) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostAccountFixedChargeRequest) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostAccountFixedChargeRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


