# NegotiatedProfileType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ExternalSystemCode** | Pointer to **string** | External system code selected to allow changes from external system. | [optional] 
**ProfileIdList** | Pointer to [**[]UniqueIDType**](UniqueIDType.md) | Unique Id that references an object uniquely in the system. | [optional] 
**ProfileName** | Pointer to [**ProfileNameType**](ProfileNameType.md) |  | [optional] 
**ProfileType** | Pointer to [**ProfileTypeType**](ProfileTypeType.md) |  | [optional] 
**RateInfoList** | Pointer to [**[]NegRateAccessType**](NegRateAccessType.md) | collection of Negotiated rates. | [optional] 

## Methods

### NewNegotiatedProfileType

`func NewNegotiatedProfileType() *NegotiatedProfileType`

NewNegotiatedProfileType instantiates a new NegotiatedProfileType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewNegotiatedProfileTypeWithDefaults

`func NewNegotiatedProfileTypeWithDefaults() *NegotiatedProfileType`

NewNegotiatedProfileTypeWithDefaults instantiates a new NegotiatedProfileType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetExternalSystemCode

`func (o *NegotiatedProfileType) GetExternalSystemCode() string`

GetExternalSystemCode returns the ExternalSystemCode field if non-nil, zero value otherwise.

### GetExternalSystemCodeOk

`func (o *NegotiatedProfileType) GetExternalSystemCodeOk() (*string, bool)`

GetExternalSystemCodeOk returns a tuple with the ExternalSystemCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExternalSystemCode

`func (o *NegotiatedProfileType) SetExternalSystemCode(v string)`

SetExternalSystemCode sets ExternalSystemCode field to given value.

### HasExternalSystemCode

`func (o *NegotiatedProfileType) HasExternalSystemCode() bool`

HasExternalSystemCode returns a boolean if a field has been set.

### GetProfileIdList

`func (o *NegotiatedProfileType) GetProfileIdList() []UniqueIDType`

GetProfileIdList returns the ProfileIdList field if non-nil, zero value otherwise.

### GetProfileIdListOk

`func (o *NegotiatedProfileType) GetProfileIdListOk() (*[]UniqueIDType, bool)`

GetProfileIdListOk returns a tuple with the ProfileIdList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileIdList

`func (o *NegotiatedProfileType) SetProfileIdList(v []UniqueIDType)`

SetProfileIdList sets ProfileIdList field to given value.

### HasProfileIdList

`func (o *NegotiatedProfileType) HasProfileIdList() bool`

HasProfileIdList returns a boolean if a field has been set.

### GetProfileName

`func (o *NegotiatedProfileType) GetProfileName() ProfileNameType`

GetProfileName returns the ProfileName field if non-nil, zero value otherwise.

### GetProfileNameOk

`func (o *NegotiatedProfileType) GetProfileNameOk() (*ProfileNameType, bool)`

GetProfileNameOk returns a tuple with the ProfileName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileName

`func (o *NegotiatedProfileType) SetProfileName(v ProfileNameType)`

SetProfileName sets ProfileName field to given value.

### HasProfileName

`func (o *NegotiatedProfileType) HasProfileName() bool`

HasProfileName returns a boolean if a field has been set.

### GetProfileType

`func (o *NegotiatedProfileType) GetProfileType() ProfileTypeType`

GetProfileType returns the ProfileType field if non-nil, zero value otherwise.

### GetProfileTypeOk

`func (o *NegotiatedProfileType) GetProfileTypeOk() (*ProfileTypeType, bool)`

GetProfileTypeOk returns a tuple with the ProfileType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileType

`func (o *NegotiatedProfileType) SetProfileType(v ProfileTypeType)`

SetProfileType sets ProfileType field to given value.

### HasProfileType

`func (o *NegotiatedProfileType) HasProfileType() bool`

HasProfileType returns a boolean if a field has been set.

### GetRateInfoList

`func (o *NegotiatedProfileType) GetRateInfoList() []NegRateAccessType`

GetRateInfoList returns the RateInfoList field if non-nil, zero value otherwise.

### GetRateInfoListOk

`func (o *NegotiatedProfileType) GetRateInfoListOk() (*[]NegRateAccessType, bool)`

GetRateInfoListOk returns a tuple with the RateInfoList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRateInfoList

`func (o *NegotiatedProfileType) SetRateInfoList(v []NegRateAccessType)`

SetRateInfoList sets RateInfoList field to given value.

### HasRateInfoList

`func (o *NegotiatedProfileType) HasRateInfoList() bool`

HasRateInfoList returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


