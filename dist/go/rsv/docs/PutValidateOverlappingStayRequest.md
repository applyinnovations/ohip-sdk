# PutValidateOverlappingStayRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**OverlappingStayInfo** | Pointer to [**[]OverlappingStayInfoType**](OverlappingStayInfoType.md) | Overlapping stay information of a reservation. | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPutValidateOverlappingStayRequest

`func NewPutValidateOverlappingStayRequest() *PutValidateOverlappingStayRequest`

NewPutValidateOverlappingStayRequest instantiates a new PutValidateOverlappingStayRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPutValidateOverlappingStayRequestWithDefaults

`func NewPutValidateOverlappingStayRequestWithDefaults() *PutValidateOverlappingStayRequest`

NewPutValidateOverlappingStayRequestWithDefaults instantiates a new PutValidateOverlappingStayRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *PutValidateOverlappingStayRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PutValidateOverlappingStayRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PutValidateOverlappingStayRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PutValidateOverlappingStayRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetOverlappingStayInfo

`func (o *PutValidateOverlappingStayRequest) GetOverlappingStayInfo() []OverlappingStayInfoType`

GetOverlappingStayInfo returns the OverlappingStayInfo field if non-nil, zero value otherwise.

### GetOverlappingStayInfoOk

`func (o *PutValidateOverlappingStayRequest) GetOverlappingStayInfoOk() (*[]OverlappingStayInfoType, bool)`

GetOverlappingStayInfoOk returns a tuple with the OverlappingStayInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOverlappingStayInfo

`func (o *PutValidateOverlappingStayRequest) SetOverlappingStayInfo(v []OverlappingStayInfoType)`

SetOverlappingStayInfo sets OverlappingStayInfo field to given value.

### HasOverlappingStayInfo

`func (o *PutValidateOverlappingStayRequest) HasOverlappingStayInfo() bool`

HasOverlappingStayInfo returns a boolean if a field has been set.

### GetWarnings

`func (o *PutValidateOverlappingStayRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PutValidateOverlappingStayRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PutValidateOverlappingStayRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PutValidateOverlappingStayRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


