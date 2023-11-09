# PutPromotionCodeRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**PropertyPromotionCode** | Pointer to [**PropertyPromotionCodeType**](PropertyPromotionCodeType.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewPutPromotionCodeRequest

`func NewPutPromotionCodeRequest() *PutPromotionCodeRequest`

NewPutPromotionCodeRequest instantiates a new PutPromotionCodeRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPutPromotionCodeRequestWithDefaults

`func NewPutPromotionCodeRequestWithDefaults() *PutPromotionCodeRequest`

NewPutPromotionCodeRequestWithDefaults instantiates a new PutPromotionCodeRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *PutPromotionCodeRequest) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PutPromotionCodeRequest) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PutPromotionCodeRequest) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PutPromotionCodeRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetPropertyPromotionCode

`func (o *PutPromotionCodeRequest) GetPropertyPromotionCode() PropertyPromotionCodeType`

GetPropertyPromotionCode returns the PropertyPromotionCode field if non-nil, zero value otherwise.

### GetPropertyPromotionCodeOk

`func (o *PutPromotionCodeRequest) GetPropertyPromotionCodeOk() (*PropertyPromotionCodeType, bool)`

GetPropertyPromotionCodeOk returns a tuple with the PropertyPromotionCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPropertyPromotionCode

`func (o *PutPromotionCodeRequest) SetPropertyPromotionCode(v PropertyPromotionCodeType)`

SetPropertyPromotionCode sets PropertyPromotionCode field to given value.

### HasPropertyPromotionCode

`func (o *PutPromotionCodeRequest) HasPropertyPromotionCode() bool`

HasPropertyPromotionCode returns a boolean if a field has been set.

### GetWarnings

`func (o *PutPromotionCodeRequest) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PutPromotionCodeRequest) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PutPromotionCodeRequest) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PutPromotionCodeRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


